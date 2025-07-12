import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "../src/Pages/LandingPage";
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
