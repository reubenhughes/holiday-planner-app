import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// components
import HolidayCard from '../components/HolidayCard'
import TravelDetails from '../components/TravelDetails'
import TravelForm from '../components/TravelForm'
import AccommodationDetails from '../components/AccommodationDetails'
import AccommodationForm from '../components/AccommodationForm'
import ActivityDetails from '../components/ActivityDetails'
import ActivityForm from '../components/ActivityForm'
import POIDetails from '../components/POIDetails'
import POIForm from '../components/POIForm'
import TaskDetails from '../components/TaskDetails'
import TaskForm from '../components/TaskForm'
import HolidayUpdateForm from '../components/HolidayUpdateForm'

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
            <HolidayUpdateForm holiday={holiday}/>
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
            <div className="activityList">
                <h2>Activity</h2>
                {holiday && holiday.activityList.map((activity) => (
                    <ActivityDetails activityID={activity} />
                ))}
            </div>
            {holiday && <ActivityForm holiday={holiday} />}
            <div className="poiList">
                <h2>Places of Interest</h2>
                {holiday && holiday.poiList.map((poi) => (
                    <POIDetails poiID={poi} />
                ))}
            </div>
            {holiday && <POIForm holiday={holiday} />}
            <div className="taskList">
                <h2>Tasks</h2>
                {holiday && holiday.taskList.map((task) => (
                    <TaskDetails taskID={task} />
                ))}
            </div>
            {holiday && <TaskForm holiday={holiday} />}
        </div>
    )
}

export default Holiday