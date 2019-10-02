import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ViaCEP
        </h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <body>

        <div className="btn_pesquisacep">

        <form>
          <div className="container">
            <input
              type="text"
              className="className__categoria"
              id="input__categoria"
              
              />
            <button
            
            id="btn__cadastrar"
            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
            >
              Cadastrar
                            </button>
          </div>
        </form>
            </div>
      </body>
    </div>
  );
}

export default App;
