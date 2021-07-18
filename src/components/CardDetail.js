import React from 'react'

function CardDetail ({ item }) {
    return(
        <div className="card">
            <div className="avatar">
            <img 
                className="avatar"
                src={process.env.PUBLIC_URL + "/img/userphoto-prime1.png" }
                alt="avatar"
                /> 
            </div>
            <div className="card-info">
                <p className="name">{item.name}</p>
                <p>Email: <span>{item.email}</span></p>
                <p>Mobile: <span>{item.company}</span></p>
                <p>Address: <span>{item.address.street}</span></p>
                <p>Website: <span>{item.website}</span></p>
                <p>Age: <span>{item.age}</span></p>
            </div>
        </div>
    )
}

export default CardDetail