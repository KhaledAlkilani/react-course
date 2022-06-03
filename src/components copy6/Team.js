import React, {Component} from 'react'
import TeamMember from './TeamMember'
import pi from './pi'

class Team extends Component{
    constructor(){
        super()
        this.state = {
            pi : pi,
            newPi: [],
            counter: 0,
        }

        this.clickEvent = this.clickEvent.bind(this)
    }

    clickEvent(){
        if(this.state.counter < this.state.pi.length){
            this.state.newPi.push(this.state.pi[this.state.counter])
            this.setState(prevState => {
            return {counter: prevState.counter + 1}
        });
            this.newPi = this.state.newPi.map(member => {
            return <TeamMember key={member.id} 
                               img={member.img} 
                               name={member.name} 
                               position={member.position} 
                               phone={member.phone} 
                               website={member.website}/>
        })
        }
    }

    render(){
        return(
            <div className='row'>
                <button style={{marginBottom: '10px', fontSize: '25px'}} 
                className='btn btn-primary' onClick={this.clickEvent}>Click me</button>
                {this.newPi}
            </div>
        )
    }

}

export default Team