import { useState } from 'react'

const HolidayUpdateForm = ({ holiday }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [departureDate, setDeparture] = useState('')
  const [returnDate, setReturn] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    holiday.title = title
    holiday.description = description
    holiday.departureDate = departureDate
    holiday.returnDate = returnDate
    const response = await fetch('/api/holidays/' + holiday._id, {
      method: 'PATCH',
      body: JSON.stringify(holiday),
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
      setTitle('')
      setDescription('')
      setDeparture('')
      setReturn('')
      console.log('Holiday updated: ', json)
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Update Holiday</h3>

      <label>Holiday Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Description:</label>
      <input 
        type="text" 
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
        className={emptyFields.includes('description') ? 'error' : ''}
      />

      <label>Departure Date (e.g. JAN 01 2023):</label>
      <input 
        type="date" 
        onChange={(e) => setDeparture(e.target.value)} 
        value={departureDate}
        className={emptyFields.includes('departureDate') ? 'error' : ''}
      />

        <label>Return Date (e.g. JAN 15 2023):</label>
        <input 
         type="date" 
         onChange={(e) => setReturn(e.target.value)} 
        value={returnDate}
        className={emptyFields.includes('returnDate') ? 'error' : ''}
      />

      <button>Update Holiday</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default HolidayUpdateForm