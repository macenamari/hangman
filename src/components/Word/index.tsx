import './Word.css'

interface IWord {
    word: string;
    guessed: string[];
    reveal: boolean;
}

function Word({ word, guessed, reveal }: IWord) {

    return <>
        <div className="wrapper">
            {word.split('').map((letter, index) => (
                <span key={index} className='word'>
                    <span style={{visibility: guessed.includes(letter) || reveal ? 'visible' : 'hidden'}}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    </>
}

export default Word;