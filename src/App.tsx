import { useState } from "react";
import {lettresList1, lettresList2, lettresList3, mots } from "./Pendu";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="section container mt-5">
        <h1 className="text-center text-light user-select-none">BONHOMME PENDU</h1>
        <div className="row my-4">
          <div className="col">
            <img className="mx-auto d-block rounded" src="src/assets/img/pendu00.jpg" alt="pendu" />
          </div>
        </div>
        <div className="row my-4 justify-content-center">
          <div className="col-4 bg-light rounded">
            <h2 className="text-center text-danger user-select-none">_ _ _ _ _</h2>
          </div>
        </div>
       
      </section>
      <section className="container">
        <div className="row">
          <div className="btn-group my-1">
            {lettresList1.map((lettre) => (
                <button type="button" className="btn btn-success my-1" key={lettre}>
                {lettre}
              </button>
            ))}
        </div>
        </div>
        <div className="row">
          <div className="btn-group my-1">
            {lettresList2.map((lettre) => (
                <button type="button" className="btn btn-success my-1" key={lettre}>
                {lettre}
              </button>
            ))}
        </div>
        </div>
        <div className="row">
          <div className="btn-group my-1 justify-content-center">
            {lettresList3.map((lettre) => (
                <button type="button" className="btn btn-success my-1" key={lettre}>
                {lettre}
              </button>
            ))}
        </div>
        </div>
         
        
        
      </section>
    </>
  );
}

export default App;
