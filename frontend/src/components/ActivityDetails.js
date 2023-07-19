import { useEffect, useState } from 'react'

const ActivityDetails = ({ activityID }) => {
    
    const [activity, setActivity] = useState('')

    useEffect(() => {
        const fetchActivity = async () => {
            const response = await fetch ('/api/holidays/activity/' + activityID)
            const json = await response.json()

            if (response.ok) {
                setActivity(json)
            }
        }

        fetchActivity()
    }, [])

    return (
        <div className="holiday-details">
            <h4>{activity.name}</h4>
            <p><strong>Description: </strong>{activity.description}</p>
            <p><strong>Date and time: </strong>{activity.dateTime}</p>
            <p><strong>Location: </strong>{activity.location}</p>
            <p><strong>Price: </strong>£{activity.price}</p>
            <p><strong>Notes: </strong><i>{activity.notes}</i></p>
        </div>
    )
}

export default ActivityDetails