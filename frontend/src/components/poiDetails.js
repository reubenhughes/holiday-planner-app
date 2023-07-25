import { useEffect, useState } from 'react'

const POIDetails = ({ holiday, poiID }) => {
    
    const [poi, setPOI] = useState('')

    useEffect(() => {
        const fetchPOI = async () => {
            const response = await fetch ('/api/holidays/poi/' + poiID)
            const json = await response.json()

            if (response.ok) {
                setPOI(json)
            }
        }

        fetchPOI()
    }, [])

    const handleClick = async () => {
        holiday.poiList.pop(poiID)
        const response = await fetch('/api/holidays/' + holiday._id, {
            method: 'PATCH',
            body: JSON.stringify(holiday),
            headers: {
                'Content-Type': 'application/json'
        }
        })
        const json = await response.json()
        if (response.ok) {
            console.log("Holiday updated: " + json)
        }
    }

    return (
        <div className="holiday-details">
            <h4>{poi.name}</h4>
            <p><strong>Type: </strong>{poi.type}</p>
            <p><strong>Location: </strong>{poi.location}</p>
            <p><strong>Notes: </strong><i>{poi.notes}</i></p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default POIDetails