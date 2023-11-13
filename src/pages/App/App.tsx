import Hangman from "../../components/Hangman";
import './App.css'
import Word from "../../components/Word";
import { useEffect, useState } from "react";
import { letras } from "../../data/letras";
import Timer from "../../components/Timer";
import Keyboard from "../../components/Keyboard";
import Button from "../../components/Button";
import data from '../../data/data.json'

function App() {
  //Define o grupo de palavras
  const category = data[Math.floor(Math.random() * data.length)];

  const [hint] = useState(() => {
    const result = category.dica;
    console.log(result);
    return result;
  });

  const [secret] = useState(() => {
    const result = category.itens[Math.floor(Math.random() * category.itens.length)].toLowerCase()
    console.log(result);
    return result;
  });

  //Letras inseridas
  const [guessed, setGuessed] = useState<string[]>([]);
  const errors = guessed.filter((letter) => !secret.includes(letter));

  //Timer
  const [seconds, setSeconds] = useState(60);

  //Condições para vencedor ou ganhador
  const loser = errors.length >= 6 || seconds === 0;
  const winner = secret.replace(/\s/g, '').split('').every((letter) => guessed.includes(letter));

  //Impede a inserção se a letra já foi clicada, ou se o jogo tiver terminado
  function addGuessedLetter(letter: string) {
    if (guessed.includes(letter) || winner || loser) {
      return;
    }
    else {
      setGuessed((guessed) => [...guessed, letter]);
    }
  }

  const handleClick = (letter: string) => {
    addGuessedLetter(letter);
  }

  //Atualiza a página
  const refresh = () => {
    window.location.reload();
  }

  //Renderiza o timer
  //vencedor: timer congela com o tempo restante
  //perdedor por 6 ou mais chutes: timer zerado
  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      const freeze = () => {
        clearInterval(timer);
      }

      if (winner) {
        setTimeout(freeze, seconds);
      }

      if (errors.length >= 6) {
        setSeconds(0);
      }

      return () => clearInterval(timer);
    }
  }, [seconds, winner, errors.length]);


  return (
    <div className="App">
      <h1>Hangman</h1>
      <Timer seconds={seconds} />
      <div className="row">
        <div className="column">
          <Hangman guesses={errors.length} />
          <Word
            guessed={guessed}
            word={secret}
            reveal={loser} />
        </div>
        <div className="column">
          <div className="dica">dica: {hint}</div>
          <div className={winner || loser ? 'result show' : 'result'}>
            {loser && 'Você perdeu!'}
            {winner && 'Parabéns, você ganhou!'}
            <Button
              onButtonClick={refresh}
              text="Tentar novamente" />
          </div>
          <Keyboard
            onButtonClick={handleClick}
            letras={letras}
            clicked={guessed}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
