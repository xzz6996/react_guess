function Welcome(props) {
    return <h1>hello,{props.name}</h1>
}

const element = <Welcome name="大名鼎鼎的xxx" />

ReactDOM.render(element, document.getElementById('root'))