import React from 'react'


class roulette extends React.Component{
  state = {
    chamber: null,
    spiningTheChamber: false
  }

   bulletInChamber = 8

   generateNum(){
    return Math.ceil(Math.random() * 8)
  }

  falseChamber(){
    this.setState({chamber: this.generateNum() })
    this.setState({spiningTheChamber : false})
  }



  handleButtonClick(){
    this.setState({spiningTheChamber: true})
    setTimeout(() => this.falseChamber(), 2000)
  }


  display(){
    
    if (this.state.spiningTheChamber === true){
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (this.state.chamber === this.bulletInChamber){
      return 'BANG!!!!'
    } else {
      return 'You safe man'
    }

  }


  render(){
    return (
      <div>
        <button onClick={() => this.handleButtonClick()}>Pull The Trigger!</button>
        <p>
          {this.display()}
        </p>
      </div>
    )
  }


}


export default roulette