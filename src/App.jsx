import React from "react";
import {
  Routes,
  BrowserRouter,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import WebDevelopmentPage from "./components/pages/web";
import AppDevelopmentPage from "./components/pages/app";
import SoftwareDevelopmentPage from './components/pages/software';
import DesignPage from "./components/pages/design";
import DigitalPage from "./components/pages/digital";
import ConsultantPage from "./components/pages/consultancy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route exact path="/" element={<Home/>} />
          <Route path="/web-development" element={<WebDevelopmentPage/>} />
          <Route path="/app-development" element={<AppDevelopmentPage/>} />
          <Route path="/software-development" element={<SoftwareDevelopmentPage/>} />
          <Route path="/design" element={<DesignPage/>} />
          <Route path="/digital-marketing" element={<DigitalPage/>} />
          <Route path="/tech-consultancy" element={<ConsultantPage/>} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
