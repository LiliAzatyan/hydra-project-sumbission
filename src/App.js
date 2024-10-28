import Header from "./layout/header/Header.js";
// import Footer from "./layout/footer/Footer";
import "./App.css";
import ComingSoon from "./pages/comingSoon/ComingSoon.js";
import PATHS from "./constant/paths.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path={PATHS.COMING_SOON} element={<ComingSoon/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
