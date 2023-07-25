import { useState } from 'react'

const AccommodationForm = ({ holiday }) => {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [price, setPrice] = useState('')
  const [notes, setNotes] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])


  const updateHoliday = async (accommodationID) => {
    holiday.accommodationList.push(accommodationID)
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
    const accommodation = {name, type, checkin, checkout, price, notes}
    const response = await fetch('/api/holidays/accommodation', {
      method: 'POST',
      body: JSON.stringify(accommodation),
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
      setCheckin('')
      setCheckout('')
      setPrice('')
      setNotes('')
      updateHoliday(json._id)
      console.log('New accommodation added:', json)
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add Accommodation Plans</h3>

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

      <label>Check-in:</label>
      <input
        type="datetime-local"
        onChange={(e) => setCheckin(e.target.value)}
        value={checkin}
        className={emptyFields.includes('checkin') ? 'error' : ''}
      />

      <label>Check-out:</label>
      <input
        type="datetime-local"
        onChange={(e) => setCheckout(e.target.value)}
        value={checkout}
        className={emptyFields.includes('checkout') ? 'error' : ''}
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

      <button>Add Accommodation</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default AccommodationForm