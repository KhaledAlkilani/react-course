import React from 'react'

function TeamMember(props) {

    return (
        <div className='col-md-4 col-sm-6'>
            <div className='card'>
                <div className='card-header'>
                    <img src={props.img} alt='pic'/>
                </div>
                <div className='card-body' 
                style={{backgroundColor: props.website ? 'white' : 'yellow'}}>
                    <h2>{props.name}</h2>
                    <h5>{props.position}</h5>
                    <div>{props.phone === ' ' ? 'no phone available' : props.phone}</div>
                    <div>{props.website}</div>
                </div>
            </div>
        </div>
    )
}

export default TeamMember