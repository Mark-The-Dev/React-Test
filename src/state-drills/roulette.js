import React from 'react'


class roulette extends React.Componet{
  state = {
    chamber: null,
    spiningTheChamber: false
  }

   bulletInChamber = 8

   generateNum(){
    return Math.ceil(Math.random() * 8)
  }

  falseChamber(){
    this.setState(this.state.chamber = generateNum())
    this.setState(this.state.spiningTheChamber = false)
  }



  handleButtonClick(){
    this.setState(this.state.spiningTheChamber = true)
    setTimeout(falseChamber(), 2000)
  }


  display(){
    const {state} = this.state
    if (state.spiningTheChamber === true){
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (state.chamber === this.bulletInChamber){
      return 'BANG!!!!'
    } else {
      return 'You safe man'
    }

  }


  render(){
    return (
      <div>
        <button onclick={() => handleButtonClick()}>Pull The Trigger!</button>
        <p>
          {this.display()}
        </p>
      </div>
    )
  }


}


export default roulette