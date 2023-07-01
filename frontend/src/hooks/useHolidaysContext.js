import { HolidaysContext } from "../context/HolidaysContext"
import { useContext } from "react"

export const useHolidaysContext = () => {
  const context = useContext(HolidaysContext)

  if(!context) {
    throw Error('useHolidaysContext must be used inside a HolidaysContextProvider')
  }

  return context
}