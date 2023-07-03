import { useHolidaysContext } from '../hooks/useHolidaysContext'

// date fns
import format from 'date-fns/format'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const HolidayDetails = ({ holiday }) => {
    const { dispatch } = useHolidaysContext()

    const handleClick = async () => {
        const response = await fetch('/api/holidays/' + holiday._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_HOLIDAY', payload: json})
        }
    }

    return (
        <div className="holiday-details">
            <h4>{holiday.title}</h4>
            <h5>{formatDistanceToNow(new Date(holiday.departureDate), { addSuffix: true})}</h5>
            <p><i>Description: {holiday.description}</i></p>
            <p><strong>Departure date: </strong>{format(new Date(holiday.departureDate), 'dd/MM/yyyy')}</p>
            <p><strong>Return date: </strong>{format(new Date(holiday.returnDate), 'dd/MM/yyyy')}</p>
            <a href={holiday._id}>Link to holiday</a>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default HolidayDetails