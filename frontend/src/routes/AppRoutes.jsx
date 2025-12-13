import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Auth from '../pages/Auth'
import Home from '../pages/Home'

function AppRoutes() {
  return (
    <Router>
      <nav className="site-nav">
        <Link to="/">Home</Link>
      </nav>

      <main className="route-main">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </Router>
  )
}

export default AppRoutes
