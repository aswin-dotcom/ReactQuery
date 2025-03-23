import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { NavLink } from "react-router-dom";
import RegularFetch from "./Components/RegularFetch";
import './App.css'
import Reactqueryfetch from "./Components/Reactqueryfetch";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/regular-fetch">Regularfetch</NavLink>
          <NavLink to="/query-fetch">reactQueryfetch</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/regular-fetch" element={<RegularFetch />}>RegularFetch</Route>
          <Route path="/query-fetch" element={<Reactqueryfetch />}>RegularFetch</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
