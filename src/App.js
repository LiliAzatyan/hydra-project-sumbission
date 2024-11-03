import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComingSoon from "./pages/comingSoon/ComingSoon.js";
import Landing from "./pages/landing/Landing.js";
import Header from "./layout/header/Header.js";
import Footer from "./layout/footer/Footer";
import PATHS from "./constant/paths.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={PATHS.COMING_SOON} element={<ComingSoon />} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
