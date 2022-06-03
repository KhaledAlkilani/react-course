import React, { Component } from "react";

class TeamMember extends Component{
    render(){
        return(
            <div className='col-md-4 col-sm-6'>
                <div className='card' style={{backgroundColor: this.props.phone ? 'white' : 'yellow'}}>
                    <div className='card-header'>
                        <img src={this.props.img} alt={this.props.id}/>
                    </div>
                    <div className='card-body' >
                        <h2>{this.props.name}</h2>
                        <h4>{this.props.position}</h4>
                        <div>{this.props.phone === '' ? 'no phone number available' : this.props.phone}</div>
                        <div>{this.props.website}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamMember