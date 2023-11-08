import './Keyboard.css';

interface IKeyboard {
    letras: string[];
    onButtonClick: (letra:string) => void;
    clicked: string[];
}

function Keyboard(props: IKeyboard) {

    const handleClick = (letra: string) => {
        props.onButtonClick(letra);
    }

    return (
        <div className="key-wrapper">
            {props.letras.map((letter) => {              
                return (
                <button 
                    className={props.clicked.includes(letter) ? 'button-disabled' : 'button'} 
                    key={letter}
                    onClick={() => {
                        handleClick(letter);
                    }}
                    
                >
                    {letter}
                </button>
            )})}
        </div>
    )

}

export default Keyboard;