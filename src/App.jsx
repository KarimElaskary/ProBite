import React from 'react'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recipe/:id' element={<RecipeDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App