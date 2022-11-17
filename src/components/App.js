import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/GlobalStyle";
import PageAdd from "../pages/PageAdd";
import Home from "../pages/PageHome";
import Login from "../pages/PageLogin";
import SingUp from "../pages/PageReg";
import PageRemove from "../pages/PageRemove";
import UserContext from "../UserContext";

function App() {
  const tokenOnLocalStorage = localStorage.getItem("token");
  const [token, setToken] = useState(tokenOnLocalStorage)
  function setAndPersistToken(token) {
		setToken(token);
		localStorage.setItem("token", token);
	}

  return (
    <>
      <UserContext.Provider value={{ token, setToken, setAndPersistToken }}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SingUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<PageAdd />} />
            <Route path="/remove" element={<PageRemove />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
