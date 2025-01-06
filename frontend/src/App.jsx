import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'

function App() {

  return (
<>
<Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/single-room/:slug' element={<SingleRoom />} />
        <Route Component={<Error />} />
      </Routes></>
  )
}

export default App
