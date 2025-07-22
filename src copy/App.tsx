import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import IndustriesPage from './pages/IndustriesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import SuccessStoriesPage from './pages/SuccessStoriesPage'
import JoinPage from './pages/JoinPage'
import ApplyFactoryPage from './pages/ApplyFactoryPage'
import ContactPage from './pages/ContactPage'
import Becomeshare from './pages/Becomeshare'

function App() {
  return (
    <Router>
      <Routes>
        {/* All routes with layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="success-stories" element={<SuccessStoriesPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="shareholder" element={<Becomeshare/>} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="apply" element={<ApplyFactoryPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App