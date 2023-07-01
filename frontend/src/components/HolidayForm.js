import { useState } from 'react'

const HolidayForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [departureDate, setDeparture] = useState('')
  const [returnDate, setReturn] = useState('')
  const [error, setError] = useState(null)

    const travelList = []
    const accommodationList = []
    const activityList = []
    const poiList = []
    const taskList = []

  const handleSubmit = async (e) => {
    e.preventDefault()

    const holiday = {title, description, departureDate, returnDate, travelList, accommodationList, activityList, poiList, taskList}

    const response = await fetch('/api/holidays', {
      method: 'POST',
      body: JSON.stringify(holiday),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setDescription('')
      setDeparture('')
      setReturn('')
      console.log('New holiday added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Create a New Holiday</h3>

      <label>Holiday Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Description:</label>
      <input 
        type="text" 
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
      />

      <label>Departure Date (e.g. JAN 01 2023):</label>
      <input 
        type="date" 
        onChange={(e) => setDeparture(e.target.value)} 
        value={departureDate} 
      />

        <label>Return Date (e.g. JAN 15 2023):</label>
        <input 
         type="date" 
         onChange={(e) => setReturn(e.target.value)} 
        value={returnDate} 
      />

      <button>Add Holiday</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default HolidayForm