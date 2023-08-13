const HEAD = (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        border: '10px solid black',
        right: '-30px',
        top: '50px',
        position: 'absolute'
    }} />
)

const BODY = (
    <div style={{
        width: '10px',
        height: '100px',
        background: 'black',
        top: '120px',
        right: 0,
        position: 'absolute'
    }} />
)

const RIGHT_ARM = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'black',
        top: '150px',
        right: '-100px',
        position: 'absolute',
        rotate: '-30deg',
        transformOrigin: 'left bottom'
    }} />
)

const LEFT_ARM = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'black',
        top: '150px',
        right: '10px',
        position: 'absolute',
        rotate: '30deg',
        transformOrigin: 'right bottom'
    }} />
)

const RIGHT_LEG = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'black',
        top: '210px',
        right: '-90px',
        position: 'absolute',
        rotate: '60deg',
        transformOrigin: 'left bottom'
    }} />
)

const LEFT_LEG = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'black',
        top: '210px',
        right: '0px',
        position: 'absolute',
        rotate: '-60deg',
        transformOrigin: 'right bottom'
    }} />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG
    , LEFT_LEG];

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return <div style={{
        position: 'relative'
    }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{
            width: '10px',
            height: '50px',
            position: 'absolute',
            background: 'black',
            right: 0,
            top: 0
        }} />
        <div style={{
            width: '200px',
            height: '10px',
            background: 'black',
            marginLeft: '120px'
        }} />
        <div style={{
            height: '400px',
            width: '10px',
            background: 'black',
            marginLeft: '120px'
        }} />
        <div style={{
            height: '10px',
            width: '250px',
            background: 'black'
        }} />
    </div>
}