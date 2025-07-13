import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import LandingPage from "../src/Pages/LandingPage";
import PersonalCounselling from "./Pages/PersonalCounselling";
import CareerCounselling from "./Pages/CareerCounselling";
import AbroadCounselling from "./Pages/AbroadCounselling";
import WorkshopPanels from "./Pages/WorkshopPanels";
import './App.css';
import PersonalityAssessment from "./Pages/PersonalAssessment";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/personalcounselling" element={<PersonalCounselling />} />;
          <Route path="/careercounselling" element={<CareerCounselling />} />
          <Route path="/abroadcounselling" element={<AbroadCounselling />} />
          <Route path="/careercounselling" element={<CareerCounselling />} />;
          <Route path="/workshoppanels" element={<WorkshopPanels />} />;
          <Route path="/personalassessment" element={<PersonalityAssessment />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
