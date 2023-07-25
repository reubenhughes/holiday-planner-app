import { useEffect, useState } from 'react'

const TravelDetails = ({ holiday, travelID }) => {
    
    const [travel, setTravel] = useState('')

    useEffect(() => {
        const fetchTravel = async () => {
            const response = await fetch ('/api/holidays/travel/' + travelID)
            const json = await response.json()

            if (response.ok) {
                setTravel(json)
            }
        }

        fetchTravel()
    }, [])

    const handleClick = async () => {
        holiday.travelList.pop(travelID)
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
            <h4>{travel.name}</h4>
            <p><strong>Type: </strong>{travel.type}</p>
            { /* The below date and time throws an error when formatted, even though it shouldn't
              I am yet to find a reason for this */}
            <p><strong>Location: </strong>{travel.location}</p>
            <p><strong>Date and time: </strong>{travel.dateTime}</p>
            <p><strong>Price: </strong>£{travel.price}</p>
            <p><strong>Notes: </strong><i>{travel.notes}</i></p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default TravelDetails