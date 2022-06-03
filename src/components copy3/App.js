import React, { Component } from 'react'

class App extends Component{
    constructor(){
        super()
        this.state = {answer: 'No'}
    }

    render(){
        return(
            <h1>Do you hate me? {this.state.answer}</h1>
        )
    }
}

export default App 