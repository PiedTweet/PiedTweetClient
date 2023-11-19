import { createContext, useState } from 'react'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [ctx, setCtx] = useState({})
  return <DataContext.Provider value={{ ctx, setCtx }}>{children}</DataContext.Provider>
}

export default DataContext
