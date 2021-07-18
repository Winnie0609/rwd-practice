import React, {useState} from 'react'

function Date() {
    const [userDate, setUserDate] = useState("")
    const [convertDate, setConvertDate] = useState("")

    function convert() {
        const splitDate = userDate.split("/")

        if (splitDate[0] > 31 || splitDate[0] < 1) {
            window.alert("Please enter a valid date.")
        } else if (splitDate[1] > 12 || splitDate[1] < 1) {
            window.alert("Please enter a valid month.")
        } else {
            setConvertDate(userDate.split("/").reverse().join("-")) 
            setUserDate("")
        }
    }

    return (
        <div className="date-area">
            <label>Date</label>
            <div className="input-area">
                <input
                    type = "text"
                    value = {userDate}
                    onChange={(e) => setUserDate(e.target.value)}
                />
                <button onClick={() => convert()}><strong>CONVERT</strong></button>
            </div>
            <p>Converted Date: <span>{convertDate}</span></p>
        </div>
    )
}

export default Date