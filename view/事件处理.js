<button onClick={activateLasers}>Activate Lasers</button>;

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("55555555555555");
  }
  return (
    <a href="#" onClick={handleClick}>
      click me
    </a>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { IsToggel: false }
    this.change = this.change.bind(this)
  }
  change() {
    this.setState(state => {
      IsToggel: !state.IsToggel
    })
  }
  render() {
    return (
      <div onClick={change} >
        {IsToggel}
      </div>
    )
  }
}




class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(state => {
      isToggleOn: !state.isToggleOn
    })
  }

  render() {
    return (
      <a href="#" onClick={handleClick}>
        {this.state.isToggleOn ? 'on' : 'false'}
      </a>
    )
  }
}