import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Success from './Pages/Success'
import Error from './Pages/Error'
import { Provider } from 'react-redux'
import ProtectedRoute from './component/ProtectedRoute'

const App = () => {
  return (<>
   <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/success' element={<ProtectedRoute element={<Success/>}/>}/>
     <Route path='/*' element={<Error/>}/>
    </Routes>
   </BrowserRouter>
  </>)
}

export default App
