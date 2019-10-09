import React from 'react';
import './App.css';

import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub2.0</h1>
      </header>

      <input>
      <form>
                    <div className="item">
                    <input
                        className="input__login"
                        placeholder="username"

                        type="text"
                        name="username"
                        id="login__email"
                    />
                    <p 
                        className="text__login"
                        style={{color: "red", textAlign: "center"}}
                    >
                    </p>
                    </div>
                    <div className="item">
                    <input
                        className="input__login"
                        placeholder="password"
                        type="password"
                        name="password"
                        id="login__password"
                    />
                    </div>
                    <div className="item">
                    <button className="btn btn__login" id="btn__login">
                        Login
                    </button>
                    </div>
                </form>
      </input>
    </div>
  );
}

export default App;
