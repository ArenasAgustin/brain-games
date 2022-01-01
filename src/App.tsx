import React from "react";
import { Route, Routes } from "react-router-dom";
import Level1 from "./pages/Level1/Level1Page";
import Level2 from "./components/Level2/Level2";
import SelectLevel from "./pages/SelectLevel/SelectLevel";
import Home from "./pages/Home/Home";
import "./App.scss";


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/select" element={<SelectLevel />} />

        <Route path="/select/level1" element={<Level1 />} />

        <Route path="/select/level2" element={<Level2 />} />
      </Routes>
    </div>
  );
}

export default App;
