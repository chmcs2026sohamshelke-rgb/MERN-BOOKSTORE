import React from 'react'
//import { Route } from 'react-router'
import {Route,Routes} from "react-router"
import HomePage from "./pages/HomePage"
import BookDetailPage from "./pages/BookDetailPage"
import CreatePage from './pages/CreatePage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create" element={<CreatePage />}/>
        <Route path="/book/:id" element={<BookDetailPage />} />
      </Routes>
      
    </div>
  )
}

export default App
