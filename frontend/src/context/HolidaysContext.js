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