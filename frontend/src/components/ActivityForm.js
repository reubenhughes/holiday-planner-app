import { useState } from 'react'

const ActivityForm = ({ holiday }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [notes, setNotes] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])


  const updateHoliday = async (activityID) => {
    holiday.activityList.push(activityID)
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
    const activity = {name, description, dateTime, location, price, notes}
    const response = await fetch('/api/holidays/activity', {
      method: 'POST',
      body: JSON.stringify(activity),
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
      setDescription('')
      setDateTime('')
      setLocation('')
      setPrice('')
      setNotes('')
      updateHoliday(json._id)
      console.log('New activity added:', json)
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add Activity Plans</h3>

      <label>Name:</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
        className={emptyFields.includes('name') ? 'error' : ''}
      />

      <label>Description:</label>
      <input 
        type="text" 
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
        className={emptyFields.includes('description') ? 'error' : ''}
      />

      <label>Date and time:</label>
      <input
        type="datetime-local"
        onChange={(e) => setDateTime(e.target.value)}
        value={dateTime}
        className={emptyFields.includes('dateTme') ? 'error' : ''}
      />

      <label>Location:</label>
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        className={emptyFields.includes('location') ? 'error' : ''}
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

      <button>Add Activity</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ActivityForm