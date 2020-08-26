import React, { Component } from 'react'

class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0,
         }
    }

    componentDidMount(){
        
        this.interval = setInterval(()=> {
            this.setState(({count}) => ({ count: this.state.count+ 1 }))
        }, 1000)
        console.log(this.state.count)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    display(){
        const {count} = this.state
        if(count >= 8){
            clearInterval(this.interval)
            return "BOOM!"
        } else if (count % 2 === 0){
            return "tick"
        }else {
            return "tock"
        }
    }

    render() { 
        return ( <div><p>{this.display()}</p></div> );
    }
}
 
export default Bomb;
