import './Button.css';

interface IButton {
    onButtonClick: () => void;
}

export default function Button({ onButtonClick }: IButton) {

    return (
        <button 
            type='submit' 
            className="button"
            onClick={onButtonClick}
        >
            Tentar novamente
        </button>
    )
}