import { useState } from 'react'

const TravelForm = ({ holiday }) => {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [location, setLocation] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [price, setPrice] = useState('')
  const [notes, setNotes] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])


  const updateHoliday = async (travelID) => {
    holiday.travelList.push(travelID)
    const response = await fetch('/api/holidays/' + holiday._id, {
        method: 'PATCH',
        body: JSON.stringify(holiday),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
    if (response.ok) {
        console.log("Holiday updated: " + json)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const travel = {name, type, location, dateTime, price, notes}
    const response = await fetch('/api/holidays/travel', {
      method: 'POST',
      body: JSON.stringify(travel),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setError(null)
      setEmptyFields([])
      setName('')
      setType('')
      setLocation('')
      setDateTime('')
      setPrice('')
      setNotes('')
      updateHoliday(json._id)
      console.log('New travel added:', json)
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add Travel Plans</h3>

      <label>Name:</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
        className={emptyFields.includes('name') ? 'error' : ''}
      />

      <label>Type:</label>
      <input 
        type="text" 
        onChange={(e) => setType(e.target.value)} 
        value={type}
        className={emptyFields.includes('type') ? 'error' : ''}
      />

      <label>Location:</label>
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        className={emptyFields.includes('location') ? 'error' : ''}
      />

      <label>Date and time:</label>
      <input
        type="datetime-local"
        onChange={(e) => setDateTime(e.target.value)}
        value={dateTime}
        className={emptyFields.includes('dateTime') ? 'error' : ''}
      />

      <label>Price (£):</label>
      <input
        type="number"
        step="0.01"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        className={emptyFields.includes('price') ? 'error' : ''}
      />

      <label>Notes:</label>
      <input
        type="text"
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
        className={emptyFields.includes('notes') ? 'error' : ''}
      /> 

      <button>Add Travel</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default TravelForm