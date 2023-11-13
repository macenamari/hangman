import './Button.css';

interface IButton {
    onButtonClick: () => void;
    text: string
}

export default function Button({ onButtonClick, text }: IButton) {

    return (
        <button 
            type='submit' 
            className="button"
            onClick={onButtonClick}
        >
            {text}
        </button>
    )
}