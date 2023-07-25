import { useEffect, useState } from 'react'

const TravelDetails = ({ travelID }) => {
    
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
        </div>
    )
}

export default TravelDetails