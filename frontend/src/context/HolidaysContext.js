import { createContext, useReducer } from 'react'

export const HolidaysContext = createContext()

export const holidaysReducer = (state, action) => {
  switch (action.type) {
    case 'SET_HOLIDAYS':
      return { 
        holidays: action.payload 
      }
    case 'CREATE_HOLIDAY':
      return { 
        holidays: [action.payload, ...state.holidays] 
      }
    case 'DELETE_HOLIDAY':
      return {
        holidays: state.holidays.filter((w) => w._id !== action.payload._id)
      }
      case 'UPDATE_HOLIDAY':
      return {
        holidays: state.holidays.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const HolidaysContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(holidaysReducer, { 
    holidays: null
  })
  
  return (
    <HolidaysContext.Provider value={{ ...state, dispatch }}>
      { children }
    </HolidaysContext.Provider>
  )
}