import { useCallback, useEffect, useState } from 'react';
import words from './wordsList.json';
import { Keyboard } from './components/Keyboard';
import { HangmanWord } from './components/HangmanWord';
import { HangmanDrawing } from './components/HangmanDrawing';

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}


function App() {

  const [wordToGuess, setWordToGuess] = useState(getWord())

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));


  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    }
    , [guessedLetters, isLoser, isWinner]);

    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        const key = e.key;
        if (key !== "Enter") return
  
        e.preventDefault();
        setGuessedLetters([]);
        setWordToGuess(getWord());
      }
  
      document.addEventListener("keypress", handler)
  
      return () => {
        document.removeEventListener("keypress", handler);
      }
    });



  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler);
    }
  });

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    alignItems: 'center',
    gap: '2rem',
    margin: '0 auto'
  }}>
    <div style={{
      textAlign: 'center',
      fontSize: '2rem'
    }}>
      {isWinner && "Winner! Refresh to try again"}
      {isLoser && "Nice try - Refresh to try again"}
    </div>
    <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
    <HangmanWord reveal={isLoser} wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
    <div style={{ alignSelf: 'stretch' }}>
      <Keyboard
        disabled={isWinner || isLoser}
        activeLetters={guessedLetters.filter(letter =>
          wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter} />
    </div>
  </div>
}

export default App;
