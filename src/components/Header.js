import React from 'react'


function Header(){

    const client = "programmer";
    const title = {
        designer: "Junior Graphic Designer",
        programmer: "Junior Software Developer"
    }

// const info = {
//     name: "Khaled",
//     nick: "Alkilani"
// }

    return (
        <div className='navbar bg-dark rounded text-white '>
            {/* Hello {`${info.name} ${info.nick}`} */}
        <h2 className='m-3'>
            { client === "Designer" ? title.designer + " " : title.programmer + " "} 
        </h2>
      </div>
    );
}

export default Header