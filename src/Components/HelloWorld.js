import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            who: "world"
        }
    }


    world = () => {
        const newName = this.state.who

        this.setState({
            who: "world"
        })
    }

    friend = () => {
        const newName = this.state.who

        this.setState({
            who: "friend"
        })
    }

    react = () => {
        const newName = this.state.who

        this.setState({
            who: "React"
        })
    }


    render() {
        return (
            <div>
                <p>
                    Hello, {this.state.who}!
                </p>
                <button onClick={this.world}>World</button>
                <button onClick={this.friend}>Friend</button>
                <button onClick={this.react}>React</button>
            </div>
        )
    }

}

export default HelloWorld;