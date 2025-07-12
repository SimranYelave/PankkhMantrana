import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "../src/Pages/LandingPage";
import PersonalCounselling from "./Pages/PersonalCounselling";
import CareerCounselling from "./Pages/CareerCounselling";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/personalcounselling" element={<PersonalCounselling />} />;
          <Route path="/careercounselling" element={<CareerCounselling />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
