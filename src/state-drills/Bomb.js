import React, { Component } from 'react'

class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    componentDidMount(){
         let newCount = this.state.count + 1;

         var intervalId = setInterval(this.state.count, 1000);
         if(newCount >= 0) { 
            this.setState({ count: newCount });
        }
        console.log(this.state)
    }
    render() { 
        return ( <div><p>{this.state.count}</p></div> );
    }
}
 
export default Bomb;
