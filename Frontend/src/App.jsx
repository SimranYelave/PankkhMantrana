import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "../src/Pages/LandingPage";
import PersonalCounselling from "./Pages/PersonalCounselling";
import CareerCounselling from "./Pages/CareerCounselling";
import './App.css';
import WorkshopPanels from "./Pages/WorkshopPanels";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/personalcounselling" element={<PersonalCounselling />} />;
          <Route path="/careercounselling" element={<CareerCounselling />} />;
          <Route path="/workshoppanels" element={<WorkshopPanels/>}/>;
        </Routes>
      </Router>
    </>
  )
}

export default App
