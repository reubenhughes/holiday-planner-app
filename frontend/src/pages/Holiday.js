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
            <h2>Home</h2>
            <div className="holidays">
                <h4>hello</h4>
                {holiday && <HolidayCard holiday={holiday}/>}
            </div>
        </div>
    )
}

export default Holiday