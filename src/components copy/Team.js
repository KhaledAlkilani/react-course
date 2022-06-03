import React from 'react'
import TeamMember from './TeamMember'

function Team(){
    const pi = [
        {id: 0, img: 'khaled1.jpg', name: 'Khaled Alkilani', position: 'Junior Software Developer', phone: ' ',             website: 'www.esedu.fi'},
        {id: 1, img: 'khaled2.jpg', name: 'Nour Homsi',      position: 'Graphic Designer',          phone: '044 255 8984',  website: 'www.esedu.fi'},
        {id: 2, img: 'khaled1.jpg', name: 'Captin Majed',    position: 'Football Player',           phone: '045 66 8874',   website: 'www.esedu.fi'},
        {id: 3, img: 'khaled2.jpg', name: 'Albert Alkilani', position: 'Software Engineer',         phone: '044 21 6655',   website: 'www.esedu.fi'},
    ]


const members = pi.map(member => <TeamMember
                key={member.id}
                img={member.img}
                name={member.name}
                position={member.position}
                phone={member.phone}
                website={member.website}
/>)

    return(
        <div className='row'>
            {members}
        </div>
    )

}

export default Team;