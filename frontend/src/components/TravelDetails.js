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
            <h4>{travel.title}</h4>
            <p><strong>Type: </strong>{travel.type}</p>
            <p><strong>ID: </strong>{travel._id}</p>
        </div>
    )
}

export default TravelDetails