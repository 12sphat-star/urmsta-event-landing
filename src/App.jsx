import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventLandingPage from "./pages/EventLandingPage";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventLandingPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;