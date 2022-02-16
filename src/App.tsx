import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SelectLevel from "./pages/SelectLevel/SelectLevel";
import Level1 from "./pages/Level1/Level1Page";
import Level2 from "./pages/Level2/Level2Page";
import Level3 from "./pages/Level3/Level3Page";
import Level4 from "./pages/Level4/Level4Page";
import Level5 from "./pages/Level5/Level5Page";
import Level6 from "./pages/Level6/Level6Page";
import Level7 from "./pages/Level7/Level7Page";
import Level8 from "./pages/Level8/Level8Page";
import Level9 from "./pages/Level9/Level9Page";
import Level10 from "./pages/Level10/Level10Page";
import Level11 from "./pages/Level11/Level11Page";
import Level12 from "./pages/Level12/Level12Page";
import Level13 from "./pages/Level13/Level13Page";
import Level14 from "./pages/Level14/Level14Page";
import Level15 from "./pages/Level15/Level15Page";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/select" element={<SelectLevel />} />

        <Route path="/select/level1" element={<Level1 />} />

        <Route path="/select/level2" element={<Level2 />} />

        <Route path="/select/level3" element={<Level3 />} />

        <Route path="/select/level4" element={<Level4 />} />

        <Route path="/select/level5" element={<Level5 />} />

        <Route path="/select/level6" element={<Level6 />} />

        <Route path="/select/level7" element={<Level7 />} />

        <Route path="/select/level8" element={<Level8 />} />

        <Route path="/select/level9" element={<Level9 />} />

        <Route path="/select/level10" element={<Level10 />} />

        <Route path="/select/level11" element={<Level11 />} />

        <Route path="/select/level12" element={<Level12 />} />

        <Route path="/select/level13" element={<Level13 />} />

        <Route path="/select/level14" element={<Level14 />} />

        <Route path="/select/level15" element={<Level15 />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
