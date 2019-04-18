import React, {createContext, useContext, useState, useEffect} from 'react';
//Create a context to hold the windowDimensions
const WindowDimensionsContext = createContext(null);
//Hook that adds an event listener on the window to constantly update the context when the window resizes
export const WindowDimensionsProvider = ({children}) => {
  const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight})
  useEffect(() => {
    const handleResize = () => {
      setDimensions({width: window.innerWidth, height: window.innerHeight})
    }
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize)}
  }, [])
  return (
    <WindowDimensionsContext.Provider value={dimensions}>
      {children}
    </WindowDimensionsContext.Provider>
  )
}
//Hook that is going to be used in inner components to get access to the context
export const useWindowDimensions = () => {
  return useContext(WindowDimensionsContext);
}