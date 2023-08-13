import { useState } from "react";
import { lettresList1, lettresList2, lettresList3, mots, imgLink } from "./Pendu";
import "./App.css";
import "./component/Alert";
import { Alert } from "./component/Alert";

function App() {
  const [count, setCount] = useState(0);
  const [randomWord] = useState(randomize(mots));
  const [hiddenWord, setHiddenWord] = useState(hideWord(randomWord));
  const [disabledButtons, setDisabledButtons] = useState<string[]>([]);

  //Recharger la page
  const handleRestart = () => {
    window.location.reload();
  };

  //Trouver la lettre
  const handleCLick = (letter: string) => {
    for (var i = 0; i < randomWord.length; i++) {
      if (randomWord.charAt(i) === letter) {
        setHiddenWord(setCharAt(hiddenWord, i, letter));
      }
    }

    if (!randomWord.includes(letter)) {
      setCount((count) => count + 1);
    }

    setDisabledButtons((prevDisabledButtons) => [
      ...prevDisabledButtons,
      letter,
    ]);
  };

  return (
    <>
      <section className="section container mt-5">
        <h1 className="text-center text-light user-select-none">
          BONHOMME PENDU
        </h1>
        <div className="row my-4">
          <div className="col">
            <img
              className="mx-auto d-block rounded"
              src={imgLink.at(count)}
              alt="pendu"
            />
          </div>
        </div>
        <div className="row my-4 justify-content-center">
          <div className="col">
            <h2 className="bg-light rounded text-center text-danger user-select-none">
              {hiddenWord}
            </h2>
          </div>
        </div>
        <div className="row my-4">
          <div className="col d-flex justify-content-center">
            <button className="btn btn-primary rounded" onClick={handleRestart}>
              Rejouer
            </button>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="btn-group my-1">
            {lettresList1.map((lettre) => (
              <button
                type="button"
                className={`btn ${
                  disabledButtons.includes(lettre)
                    ? "btn-danger"
                    : "btn-success"
                } my-1`}
                key={lettre}
                onClick={() => handleCLick(lettre)}
                disabled={disabledButtons.includes(lettre)}
              >
                {lettre}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="btn-group my-1">
            {lettresList2.map((lettre) => (
              <button
                type="button"
                className={`btn ${
                  disabledButtons.includes(lettre)
                    ? "btn-danger"
                    : "btn-success"
                } my-1`}
                key={lettre}
                onClick={() => handleCLick(lettre)}
                disabled={disabledButtons.includes(lettre)}
              >
                {lettre}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="btn-group my-1 justify-content-center">
            {lettresList3.map((lettre) => (
              <button
                type="button"
                className={`btn ${
                  disabledButtons.includes(lettre)
                    ? "btn-danger"
                    : "btn-success"
                } my-1`}
                key={lettre}
                onClick={() => handleCLick(lettre)}
                disabled={disabledButtons.includes(lettre)}
              >
                {lettre}
              </button>
            ))}
          </div>
        </div>
      </section>
      {!hiddenWord.includes("_") && (
        <Alert
          result="Bravo"
          message="Tu as trouvé le mot caché"
          color="success"
        />
      )}
      {count === 6 && (
        <Alert
          result="Perdu"
          message="Tu n'as pas trouvé le mot dommage"
          color="danger"
        />
      )}
    </>
  );
}

//Mot aléatoire
function randomize(words: string[]) {
  return words[Math.floor(Math.random() * words.length)];
}

//Cacher le mot aléatoire
function hideWord(word: string) {
  let hiddenWord = "";
  for (let index = 0; index < word.length; index++) {
    hiddenWord += "_";
  }
  return hiddenWord;
}

//Remplacer la lettre dans le mot chaché
function setCharAt(str: string, index: number, chr: any) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

export default App;
