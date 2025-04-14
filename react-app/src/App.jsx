import AllServices from './pages/AllServices';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<AllServices/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
