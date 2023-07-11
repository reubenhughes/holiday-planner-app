import { useState } from 'react'

const TravelForm = ({ holiday }) => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])


  const updateHoliday = async (travelID) => {
    const newHoliday = holiday
    holiday.travelList.push(travelID)
    const response = await fetch('/api/holidays/' + holiday._id, {
        method: 'PATCH',
        body: JSON.stringify(newHoliday),
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
    const travel = {title, type}
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
      setTitle('')
      setType('')
      updateHoliday(json._id)
      console.log('New travel added:', json)
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Create a New Travel</h3>

      <label>Travel Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Type:</label>
      <input 
        type="text" 
        onChange={(e) => setType(e.target.value)} 
        value={type}
        className={emptyFields.includes('type') ? 'error' : ''}
      />

      <button>Add Travel</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default TravelForm