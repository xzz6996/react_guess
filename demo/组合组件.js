function Welcome(props) {
    return <h1>hello,{props.name}</h1>
}

function App() {
    return (
        <div>
            <Welcome name="xzz" />
            <Welcome name="123" />
            <Welcome name="456" />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)