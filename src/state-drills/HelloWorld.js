import React from 'react'




class HelloWorld extends React.Component {
  state= {
    who: "nothing"
  }
  handleButtonClick(e) {
    this.setState({
      who: e
    })
  }


  render () {
    return (
      <div>
        <button onClick={() => this.handleButtonClick('Friend!')}>Friend</button>
        <button onClick={() => this.handleButtonClick('React!')}>React</button>
        <button onClick={() => this.handleButtonClick('World!')}>World</button>
    <p>Hello, {this.state.who}</p>

      </div>
    )


  }


}





export default HelloWorld