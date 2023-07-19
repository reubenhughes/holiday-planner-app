import { useEffect, useState } from 'react'

const POIDetails = ({ poiID }) => {
    
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

    return (
        <div className="holiday-details">
            <h4>{poi.name}</h4>
            <p><strong>Type: </strong>{poi.type}</p>
            <p><strong>Location: </strong>{poi.location}</p>
            <p><strong>Notes: </strong><i>{poi.notes}</i></p>
        </div>
    )
}

export default POIDetails