import React, { Component } from 'react';
import './App.css';

const Form = (props) => {
  return (
      <form onSubmit={props.loadWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Get Weather</button>
      </form>
  )
}



class App extends Component {
  render() {
    return (
      <div className="leo-weather-app">
        <header className="app-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Form />
        </header>
      </div>
    );
  }
}

export default App;
