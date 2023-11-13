import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import hangman from "../../assets/hangman.png";
import './Home.css';

export default function Home(){

  const navigate = useNavigate();

  const goToGamePage = () => {
    navigate('/play');
  }

  return (
    <div className="home">
      <h1>hangman</h1>
        <div className="regras">
          Termine a palavra em 60 segundos. Se você errar 6 vezes, o jogo acaba.
        </div>
        <div>
          <img src={hangman} alt="hangman imagem" />
        </div>
      <Button
      onButtonClick={goToGamePage}
      text="Iniciar"/>
    </div>
  )
}