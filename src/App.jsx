import React, { useEffect } from 'react'
import ContentManager from 'views/contentManager/ContentManager.jsx'
import './App.css'
import navigationLogic from 'redux/logic/navigationLogic'

const App = () => {
  useEffect(() => {
    navigationLogic.addSizeListener()
    return () => navigationLogic.removeSizeListener()
  }, [])

  return (
    <ContentManager />
  )
}

export default App
