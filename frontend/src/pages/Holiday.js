import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// components
import HolidayCard from '../components/HolidayCard'

const Holiday = () => {
    const [holiday, setHoliday] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchHoliday = async () => {
            const response = await fetch('/api/holidays/' + id)
            const json = await response.json()

            if (response.ok) {
                setHoliday(json)
            }
        }

        fetchHoliday()
    }, [])

    return (
        <div className="Home">
            <h2>Holiday</h2>
            <div className="holidays">
                {holiday && <HolidayCard holiday={holiday}/>}
            </div>
            <div className="travelList"></div>
            <div className="accommodationList"></div>
            <div className="activityList"></div>
            <div className="poiList"></div>
        </div>
    )
}

export default Holiday