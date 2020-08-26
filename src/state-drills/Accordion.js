import React, { Component } from 'react';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = { currentTab: 0 }
    }

    static defaultProps = {sections: []}

    handleButtonClick(idx){
        console.log(idx)
        this.setState({currentTab: idx}, () =>console.log(this.state.currentTab))
    }

    renderButtons(){
        return this.props.sections.map((item, index) => (
             <li key={index}>
                <button onClick={()=> this.handleButtonClick(index)}>{item.title}</button>
                {this.state.currentTab === index ? this.renderContent() : null}
             </li>
             )
        )
    }

    renderContent(){
        const currentSection = this.props.sections[this.state.currentTab]
        return (
        <p className="content">
        {currentSection.content}
        </p>
    )
    }


    render() { 
        return ( 
            <div>
                <ul>
                {this.renderButtons()}
                </ul>
            </div>
         );
    }
}
 
export default Accordion;