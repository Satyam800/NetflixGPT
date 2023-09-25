import React from 'react'
import Body from './Component/Body'
import { Provider } from 'react-redux'
import store from './Utils/appStore'

import { RouterProvider,createBrowserRouter } from 'react-router-dom'
const App = () => {
  
 
  return (
   <>
   <Provider store={store}>
   <Body/>
 </Provider>
   </>
  )
}

export default App

 