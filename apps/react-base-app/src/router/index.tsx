import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import StateManagementPage from '../pages/StateManagementPage'
import RoutingPage from '../pages/RoutingPage'
import MicroFrontendPage from '../pages/MicroFrontendPage'

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/state-management" element={<StateManagementPage />} />
        <Route path="/routing" element={<RoutingPage />} />
        <Route path="/micro-frontend" element={<MicroFrontendPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter