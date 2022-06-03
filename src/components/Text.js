import React from 'react'

function Text() {
    const client = "Designer"

    const title = {
        graphic: <span style={{color: "red"}}>Graphic</span>,
        missingPro: "and web design",
        web: <span style={{color: "red"}}>web design</span>
    }

    return(
        <div>
        <p>        
            {/* {client === "Designer" ? title.graphic + " and web design are two areas that are often confused with each other. After all, they both focus on ‘design’ and they both often work on the same projects." : "Graphic and " + " " + title.web + " are two areas that are often confused with each other. After all, they both focus on ‘design’ and they both often work on the same projects." }; */}
            {client === "Designer" ? title.graphic : title.web} and web design are two areas that are often confused with each other. After all, they both focus on ‘design’ and they both often work on the same projects.
        </p>
      </div>
    );
}

export default Text