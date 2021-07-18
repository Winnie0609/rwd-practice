import React, { useEffect, useState } from 'react'
import CardDetail from './CardDetail'

function Cards () {
    const [ data, setData ] = useState([])
    const [ status, setStatus ] = useState("all")
    const [ filterdAges, setFilterdAges ] = useState(data)

    async function getData () {
        const res = await fetch("http://www.mocky.io/v2/5d73bf3d3300003733081869")
        const data = await res.json()
        // console.log(data)
        setData(data)
    }

    function statusHandlerChange(e) {
        setStatus(e.target.value)
    }

    function filterHandlerChange() {
        switch(status) {
            case "below-20":
                setFilterdAges(data.filter((item) => item.age <= 20))
                console.log(filterdAges)
                break
            case "between-21-39":
                setFilterdAges(data.filter((item) => item.age > 20 && item.age < 40))
                console.log(filterdAges)
                break
            case "above-40":
                setFilterdAges(data.filter((item) => item.age > 40))
                console.log(filterdAges)
                break
            default:
                setFilterdAges(data)
                console.log(filterdAges)
                console.log("helllo")
        }
    }

    useEffect(() => {
        getData()
        filterHandlerChange()
    }, [status])

    return(
        <>
            <div className="card-area">
                <div className="select-area">
                    <label>Filter By Age</label>
                    <select name="ages" onChange={statusHandlerChange}>
                        <option value="all">All</option>
                        <option value="below-20">20 and below</option>
                        <option value="between-21-39">21 to 39</option>
                        <option value="above-40">40 and above</option>
                    </select>
                </div>
                <div className="line"></div>
                <div className="cards">
                    {status === "all" ? 
                        data && data.map((item) => (
                            <CardDetail item={item} key={item.id} />
                        ))
                        
                        :
                        filterdAges && filterdAges.map((item) => (
                            <CardDetail item={item} key={item.id}/>
                        ))

                    }
                </div>
            </div>
        </>
    )
}

export default Cards