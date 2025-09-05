import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import StateManagementPage from '../pages/StateManagementPage'
import RoutingPage from '../pages/RoutingPage'
import MicroFrontendPage from '../pages/MicroFrontendPage'
import MermaidPage from '../pages/MermaidPage'
import MermaidTestPage from '../pages/MermaidTestPage'
import ReactFlowPage from '../pages/ReactFlowPage'
import AdvancedReactFlowPage from '../pages/AdvancedReactFlowPage'

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/state-management" element={<StateManagementPage />} />
        <Route path="/routing" element={<RoutingPage />} />
        <Route path="/micro-frontend" element={<MicroFrontendPage />} />
        <Route path="/mermaid" element={<MermaidPage />} />
        <Route path="/mermaid-test" element={<MermaidTestPage />} />
        <Route path="/react-flow" element={<ReactFlowPage />} />
        <Route path="/react-flow-advanced" element={<AdvancedReactFlowPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter