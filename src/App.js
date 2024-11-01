import Header from "./layout/header/Header.js";
// import Footer from "./layout/footer/Footer";
import "./App.css";
import ComingSoon from "./pages/comingSoon/ComingSoon.js";
import PATHS from "./constant/paths.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./pages/landing/Landing.js";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={PATHS.COMING_SOON} element={<ComingSoon />} />
        <Route path="/" element={<Landing />} />
        {/* Add other routes here if needed */}
      </Routes>
      {/* <Footer />  */}
    </Router>
  );
}

export default App;
