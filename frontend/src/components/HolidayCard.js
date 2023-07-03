const HolidayCard = ({ holiday }) => {
    return (
        <div>
            <h4>Holiday Card</h4>
            <h4>Title: {holiday.title}</h4>
            <h4>Description: {holiday.description}</h4>
            <h4>Departure date: {holiday.departureDate}</h4>
        </div>
    )
}

export default HolidayCard