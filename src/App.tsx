import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SelectLevel from "./pages/SelectLevel/SelectLevel";
import Level1 from "./pages/Level1/Level1Page";
import Level2 from "./pages/Level2/Level2Page";
import Level3 from "./pages/Level3/Level3Page";
import "./App.scss";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/select" element={<SelectLevel />} />

        <Route path="/select/level1" element={<Level1 />} />

        <Route path="/select/level2" element={<Level2 />} />

        <Route path="/select/level3" element={<Level3 />} />
      </Routes>
    </div>
  );
}

export default App;
