import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from './pages/SearchPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchPage/>}></Route>
        <Route index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
