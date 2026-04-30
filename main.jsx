// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'

import Header from './pages/Header.jsx'
import NotFound from './pages/NotFound.jsx'
import AddCreator from './pages/AddCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import CreatorDetails from './pages/CreatorDetails.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} >
        <Route index element={<App />} />
        <Route path="add_creator" element={<AddCreator />} />
        <Route path="edit_creator/:creator" element={<EditCreator />} />
        <Route path="view/:creator" element={<CreatorDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
)
