const HolidayDetails = ({ holiday }) => {
    return (
        <div className="holiday-details">
            <h4>{holiday.title}</h4>
            <p><i>Description: {holiday.description}</i></p>
            <p><strong>Departure date: </strong>{holiday.departureDate}</p>
            <p><strong>Return date: </strong>{holiday.returnDate}</p>
            <p>{holiday.createdAt}</p>
        </div>
    )
}

export default HolidayDetails