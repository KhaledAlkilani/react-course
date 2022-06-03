import React, { Component } from 'react'
import File from './File'

class App extends Component{

  render(){
    const name = 'Khaled'
    const name2 = 'Alkilani'
    return(
      <div>
        <File name={name} name2={name2} />
        <File name='Khaled' name2='Alkilani' />
        <File name='Khaled' name2='Alkilani' />
      </div>
    )
  }
}

export default App