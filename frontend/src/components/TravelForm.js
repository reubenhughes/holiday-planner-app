import { useState } from 'react'
import { useHolidaysContext } from '../hooks/useHolidaysContext'

const TravelForm = ({ holiday }) => {
  const { dispatch } = useHolidaysContext()
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])


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
      console.log('New travel added:', json)
      dispatch({type: 'CREATE_TRAVEL', payload: json})
    }
    
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Create a New Travel</h3>

      <label>Holiday Title:</label>
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