// date fns
import format from 'date-fns/format'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const HolidayCard = ({ holiday }) => {
    return (
        <div className="holiday-details">
        <h4>{holiday.title}</h4>
        <h5>{formatDistanceToNow(new Date(holiday.departureDate), { addSuffix: true})}</h5>
        <p><i>Description: {holiday.description}</i></p>
        <p><strong>Departure date: </strong>{format(new Date(holiday.departureDate), 'dd/MM/yyyy')}</p>
        <p><strong>Return date: </strong>{format(new Date(holiday.returnDate), 'dd/MM/yyyy')}</p>
        </div>
    )
}

export default HolidayCard