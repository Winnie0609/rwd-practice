import React from 'react'
import Header from './components/header'
import Cards from "./components/cards"
import Date from "./components/date"

function HomePage() {
    return(
        <>
            <Header/>
            <div className="content-container">
                <Cards/>
                <div className="line"></div>
                <Date/>
            </div>
        </>
    )
}

export default HomePage