import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ShowAllKinkun from "./pages/ShowAllKinkun.jsx";
import AddKinkun from "./pages/AddKinkun.jsx";
import EditKinkun from "./pages/EditKinkun.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-kinkun" element={<AddKinkun />} />
        <Route path="/edit-kinkun/:id" element={<EditKinkun />} />
        <Route path="/show-all-kinkun" element={<ShowAllKinkun />} />
      </Routes>
    </BrowserRouter>
  );
}
