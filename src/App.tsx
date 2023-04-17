import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Team from "./pages/team";
import Candidato from "./pages/candidato";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/candidato/:name" element={<Candidato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
