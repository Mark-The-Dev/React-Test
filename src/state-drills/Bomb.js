import React, { Component } from 'react'

class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    componentDidMount(){
        

        this.interval = setInterval(()=> {
            this.setState(({count}) => ({ count: this.state.count+ 1 }))
        }, 1000)
        console.log(this.state)
    }
    render() { 
        return ( <div><p>{this.state.count}</p></div> );
    }
}
 
export default Bomb;
