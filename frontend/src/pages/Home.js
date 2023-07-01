import { useEffect, useState } from 'react'

// components
import HolidayDetails from '../components/HolidayDetails'

const Home = () => {
    const [holidays, setHolidays] = useState(null)

    useEffect(() => {
        const fetchHolidays = async () => {
            const response = await fetch('/api/holidays')
            const json = await response.json()

            if (response.ok) {
                setHolidays(json)
            }
        }

        fetchHolidays()
    }, [])

    return (
        <div className="Home">
            <div className="holidays">
                {holidays && holidays.map((holiday) => (
                    <HolidayDetails key={holidays._id} holiday={holiday}/>
                ))}
            </div>
        </div>
    )
}

export default Home