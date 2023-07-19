import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// components
import HolidayCard from '../components/HolidayCard'
import TravelDetails from '../components/TravelDetails'
import TravelForm from '../components/TravelForm'
import AccommodationDetails from '../components/AccommodationDetails'
import AccommodationForm from '../components/AccommodationForm'
import PriceCard from '../components/PriceCard'

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
        <div className="home">
            <div className="holidays">
                <h2>Holiday</h2>
                {holiday && <HolidayCard holiday={holiday}/>}
            </div>
            <PriceCard />
            <div className="travelList">
                <h2>Travel</h2>
                {holiday && holiday.travelList.map((travel) => (
                    <TravelDetails travelID={travel} />
                ))}
            </div>
            {holiday && <TravelForm holiday={holiday} />}
            <div className="accommodationList">
                <h2>Accommodation</h2>
                {holiday && holiday.accommodationList.map((accommodation) => (
                    <AccommodationDetails accommodationID={accommodation} />
                ))}
            </div>
            {holiday && <AccommodationForm holiday={holiday} />}
            <div className="activityList"></div>
            <div className="poiList"></div>
        </div>
    )
}

export default Holiday