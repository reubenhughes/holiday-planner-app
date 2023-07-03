import { useEffect } from 'react'
import { useHolidaysContext } from '../hooks/useHolidaysContext'

// components
import HolidayDetails from '../components/HolidayDetails'
import HolidayForm from '../components/HolidayForm'

const TestPage = () => {
    const {holidays, dispatch} = useHolidaysContext()

    useEffect(() => {
        const fetchHolidays = async () => {
            const response = await fetch('/api/holidays')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: "SET_HOLIDAYS", payload: json})
            }
        }

        fetchHolidays()
    }, [dispatch])

    return (
        <div className="home">
            <div className="holidays">
                <h2>Test page</h2>
                {holidays && holidays.map((holiday) => (
                    <HolidayDetails key={holidays._id} holiday={holiday}/>
                ))}
            </div>
            <HolidayForm />
        </div>
    )
}

export default TestPage