import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function tick() {
  const element = (
    <div>
      <h1>hello world this is function tick , use ReactDom.render</h1>
      <h2>it is {new Date().toLocaleString()}</h2>
    </div>
  );
  ReactDOM.render(element,document.querySelector('#root'))
}
setInterval(tick,1000)

class Board extends React.Component {
  renderSquare() {}
  render() {
    return;
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
