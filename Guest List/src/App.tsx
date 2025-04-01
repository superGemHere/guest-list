import './App.css'
import Home from './components/main/Home/Home'
import Header from './components/outlet/Header/Header'
import Footer from './components/outlet/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import GuestList from './components/main/GuestList/GuestList'

function App() {

  return (
    <div className="App">
      <Header />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/guestlist" element={<GuestList />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
