import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bulletInChamber: props.bulletInChamber,
            chamber: null,
            spinningTheChamber: false,
            display: null
        }
    }


    triggerPulled = () => {
        this.setState({
            spinningTheChamber: true,
            display: 'Spinning the chamber and pulling the trigger!'
        })

        let timeout = setTimeout(this.ranNum, 2000)

    }

    ranNum = () => {

        const newChamber = Math.ceil(Math.random() * 8)
        this.setState({
            chamber: newChamber,
            spinningTheChamber: false
        })
        this.display()
    }

    display = () => {
        if(this.state.chamber === this.state.bulletInChamber) {
            this.setState({
                display: 'BANG!!!! You Dead.'
            }) 
        }
        else {
            this.setState({
                display: "You're safe!"
            }) 
        }
    }



    render() {
        return (
            <div>
                <p>{this.state.display}</p>
                <button onClick={this.triggerPulled}>Pull the trigger!</button>
            </div>
        )
    }

}

export default RouletteGun;