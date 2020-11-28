import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

// function tick() {
//   const element = (
//     <div>
//       <h1>hello world this is function tick , use ReactDom.render</h1>
//       <h2>it is {new Date().toLocaleString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element,document.querySelector('#root'))
// }
// setInterval(tick,1000)






class Toggle extends React.Component{
  constructor(props){
    super(props)
    this.state={isToggleOn:true}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render(){
    return (
      <a href="#" onClick={this.handleClick}>
        {this.state.isToggleOn?'on':'false'}
      </a>
    )
  }
}

class Clock1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick()
    })
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <Toggle />
      </div>
    );
  }
}




ReactDOM.render(
  <React.StrictMode>
    <Clock1 />
    <Clock1 />
    <Clock1 />
    <Clock1 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
