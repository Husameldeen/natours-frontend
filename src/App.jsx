import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import "./App.css";
import TourPage from "./pages/TourPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<TourPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
