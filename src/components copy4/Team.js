import React, {Component} from 'react'
import TeamMember from './TeamMember'
import pi from './pi'

class Team extends Component{
    constructor(){
        super()
        this.state = {pi : pi}
    }

    mapping(x){
        const members = x.map(member => <TeamMember
                            key={member.id}
                            img={member.img}
                            name={member.name}
                            position={member.position}
                            phone={member.phone}
                            website={member.website}
        />)
        return members
    }

    render(){
        return(
            <div className='row'>
                {this.mapping(this.state.pi)}
            </div>
        )
    }

}

export default Team