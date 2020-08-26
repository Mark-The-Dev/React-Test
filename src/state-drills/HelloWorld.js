import React from 'react'




class HelloWorld extends React.Component {
  state= {
    who: null
  }
  handleButtonClick(e) => {
    console.log('hi')
  }


  render () {
    return (
      <div>
        <button onClick={() => this.handleButtonClick()}>Friend</button>
        <button onClick={() => this.handleButtonClick()}>React</button>
        <button onClick={() => this.handleButtonClick()}>World</button>
        Hello, {who}
      </div>
    )


  }


}





export default HelloWorld