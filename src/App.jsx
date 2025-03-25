import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { NavLink } from "react-router-dom";
import RegularFetch from "./Components/RegularFetch";
import './App.css'
import Reactqueryfetch from "./Components/Reactqueryfetch";
import ReactqueryfetchByClick from "./Components/ReactqueryfetchByClick";
import ReactQuerybypassingId from "./Components/ReactQuerybypassingId";
import Pagination from "./Components/Pagination";
import Usequeries from "./Components/Usequeries";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/regular-fetch">Regularfetch</NavLink>
          <NavLink to="/query-fetch">reactQueryfetch</NavLink>
          <NavLink to="/query-click">Fetch By Click</NavLink>
          <NavLink to="/pagination">Pagination</NavLink>
          <NavLink to="/react-queries">UseQueries</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/regular-fetch" element={<RegularFetch />}/>
          <Route path="/query-click" element={<ReactqueryfetchByClick />}/>
          <Route path="/query-id/:post" element={<ReactQuerybypassingId />}/>
          <Route path="/pagination" element={<Pagination />}/>
          <Route path="/react-queries" element={<Usequeries />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
