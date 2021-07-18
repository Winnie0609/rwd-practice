import React, {useState} from 'react'

function Date() {
    const [userDate, setUserDate] = useState("")
    const [convertDate, setConvertDate] = useState("")

    function convert() {
        console.log(userDate)
        setUserDate(userDate.split("/").reverse().join("-")) 
        console.log(userDate)
        setConvertDate(userDate.split("/").reverse().join("-")) 
    }

    return (
        <div className="date-area">
            <label>Date</label>
            <div className="input-area">
 
                <input 
                    type="date" 
                    value = {userDate}
                    onChange={(e) => setUserDate(e.target.value)}
                    data-date="" 
                    data-date-format="DD MMMM YYYY"
                />
                <button onClick={() => convert()}><strong>CONVERT</strong></button>
            </div>
            <p>Converted Date: <span>{convertDate}</span></p>
        </div>
    )
}

export default Date