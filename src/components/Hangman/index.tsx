import "./Hangman.css";

interface HangmanProps {
    guesses: number;
}

const Head = () => {
    return <div className="head"></div>
};

const Body = () => {
    return <div className="body"></div>
};

const RightArm = () => {
    return <div className="right-arm"></div>
};

const LeftArm = () => {
    return <div className="left-arm"></div>
};

const RightLeg = () => {
    return <div className="right-leg"></div>
};

const LeftLeg = () => {
    return <div className="left-leg"></div>
};


const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

function Hangman({guesses}: HangmanProps) {
    return (
        <div className="container">
            {bodyParts.slice(0, guesses).map((BodyPart, index) => {
                return <BodyPart key={index}/>
            })}
            <div className="hang"></div>
            <div className="haste-horizontal"></div>
            <div className="haste-vertical"></div>
            <div className="base"></div>
        </div>
    )
}

export default Hangman;