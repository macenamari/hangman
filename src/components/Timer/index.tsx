import './Timer.css';

interface ITimer {
    seconds: number;
}

export default function Timer({seconds}: ITimer) {

    return (
        <div className='timer'>
            <span>complete a palavra em {seconds} segundos</span>
        </div>
    );
}