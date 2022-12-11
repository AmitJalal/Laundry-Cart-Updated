import "./App.css";
import {
  BrowserRouter,Route,Routes,} from "react-router-dom";
// import Home from "./Components/Home/Home";
import Createorder from "./Components/CreateOrders/landingpage/Createorder";
import Pastorder from "./Components/PastOrder/Pastorderlist/Pastorder";
import SignInFullpage from "./Components/Authentication/SignInFullpage";
import RegisterFullPage from "./Components/Authentication/RegisterFullPage";
import { createContext, useState } from "react";
import Welcome from "./Components/Welcomeuser/Welcome";
export const tokenstorage = createContext();
function App() {
  const [token, settoken] = useState(null);
  return (
    <div className="App">
      <tokenstorage.Provider value={[token, settoken]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInFullpage />}></Route>
            <Route path="/register" element={<RegisterFullPage />}></Route>
            <Route path="/home" element={<Welcome />}></Route>
            <Route path="/createorder" element={<Createorder />} />
            <Route path="/pastorders" element={<Pastorder />}></Route>
          </Routes>
        </BrowserRouter>
      </tokenstorage.Provider>
    </div>
  );
}

export default App;
