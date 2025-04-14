import AllServices from './pages/AllServices';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <div className="font-roboto">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services/:name" element={<AllServices/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
