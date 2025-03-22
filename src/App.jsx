import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { NavLink } from "react-router-dom";
import RegularFetch from "./Components/RegularFetch";
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/regular-fetch">Regularfetch</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/regular-fetch" element={<RegularFetch />}>RegularFetch</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
