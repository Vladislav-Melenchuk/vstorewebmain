import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Auth from './pages/auth/Auth.jsx'
import Cart from './pages/cart/Cart.jsx'
import Home from './pages/home/Home.jsx'
import Profile from './pages/profile/Profile.jsx'
import Game from './pages/game/Game.jsx'
import ProtectedRoute from './components/protected-route/ProtectedRoute.jsx'

import Layout from './components/layout/Layout.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={<Auth />} />

        <Route path="/" element={<Layout />}>
          <Route index  element={<Home />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/game/:id' element={<Game />}/>

          <Route path='/profile' element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>} 
          />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
