import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            intervalLength: 1000
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, this.state.intervalLength)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    display() {
        const { count } = this.state
        if (count >= 8) {
            clearInterval(this.interval)
            return 'BOOM!!!!'
        } else if (count % 2 === 0) {
            return 'tick'
        } else {
            return 'tock'
        }
    }


    render() {
        return (
            <div>
                <p>{this.display()}</p>
            </div>
        )
    }
}

export default Bomb;