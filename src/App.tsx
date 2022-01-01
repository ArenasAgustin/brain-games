import React from "react";
import "./App.scss";
import Level1 from "./components/Level1/Level1";
import { Route, Routes } from "react-router-dom";
import Level2 from "./components/Level2/Level2";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/level1" element={<Level1 />} />

        <Route path="/level2" element={<Level2 />} />
      </Routes>
    </div>
  );
}

export default App;
