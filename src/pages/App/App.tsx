import Hangman from "../../components/Hangman";
import './App.css'
import Word from "../../components/Word";
import { useEffect, useState } from "react";
import { letras } from "../../data/letras";
import Timer from "../../components/Timer";
import Keyboard from "../../components/Keyboard";
import words from '../../data/words.json'
import Button from "../../components/Button";
import data from '../../data/data.json'

function App() {
  const category = data[Math.floor(Math.random() * data.length)];
  const [hint] = useState(() => {
    console.log(category.dica)
    return category.dica;
  })
  const [secret] = useState(() => {
    console.log(category.itens[Math.floor(Math.random() * category.itens.length)].toLowerCase())
    return category.itens[Math.floor(Math.random() * category.itens.length)].toLowerCase();
  });
  const [guessed, setGuessed] = useState<string[]>([]);
  const errors = guessed.filter((letter) => !secret.includes(letter));
  const [seconds, setSeconds] = useState(60);
  const loser = errors.length >= 6 || seconds === 0;
  const winner = secret.split('').every((letter) => guessed.includes(letter));

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

  const refresh = () => {
    window.location.reload();
  }

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
  }, [seconds]);
  

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
          <Keyboard
            onButtonClick={handleClick}
            letras={letras}
            clicked={guessed}
          />
        </div>
      </div>
      <div className={winner || loser ? 'result show' : 'result'}>
        {loser && 'Você perdeu!'}
        {winner && 'Parabéns, você ganhou!'}
        <Button 
        onButtonClick={refresh}/>
      </div>
    </div>
  );
}

export default App;
