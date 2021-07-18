import React from 'react'

function Header() {
    return(
        <>
            <nav>
               <img 
                className="logo"
                src={process.env.PUBLIC_URL + "/img/AIA corporate logo_white_88.png" }
                alt="logo"
                /> 
                <ul>
                    <li>Our Products</li>
                    <li>AIA Vitality</li>
                    <li>What Matters</li>
                    <li>About AIA</li>
                    <li>Help & Support</li>
                    <li>My AIA</li>
                </ul>
            </nav>
            <h1>
                District Manager
            </h1>
        </>
    )
}

export default Header