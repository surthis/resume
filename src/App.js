import './App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home  from "./pages/home";
import Login  from "./pages/login";
import Profile  from "./pages/profile";
function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route  path="/" element={ <Home /> } />
          <Route  path="/Home" element={ <Home /> } />
          <Route path="/Login" element={ <Login/> } />
          <Route path="/Profile" element={ <Profile/> } />
        </Routes>
    </Router>
  </>
  



  );
}

export default App;
