import React from 'react'
import { BrowserRouter as Router , Route,Routes  } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AuthPage from './pages/authPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App;