import React from "react";
import {
  Routes,
  BrowserRouter,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import WebDevelopmentPage from "./components/pages/web";
import AppDevelopmentPage from "./components/pages/app";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route exact path="/" element={<Home/>} />
          <Route path="/web-development" element={<WebDevelopmentPage/>} />
          <Route path="/app-development" element={<AppDevelopmentPage/>} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
