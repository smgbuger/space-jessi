import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./pages/Homepage";
import Moon from "./pages/destination/Moon";
import Mars from "./pages/destination/Mars";
import Europa from "./pages/destination/Europa";
import Titan from "./pages/destination/Titan";
import CrewA from "./pages/crew/CrewA";
import CrewB from "./pages/crew/CrewB";
import CrewC from "./pages/crew/CrewC";
import CrewD from "./pages/crew/CrewD";
import TechnologyA from "./pages/technology/TechnologyA";
import TechnologyB from "./pages/technology/TechnologyB";
import TechnologyC from "./pages/technology/TechnologyC";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [space, setSpace] = useState("");
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/destination/moon" element={<Moon />} />
          <Route path="/destination/mars" element={<Mars />} />
          <Route path="/destination/europa" element={<Europa />} />
          <Route path="/destination/titan" element={<Titan />} />
          <Route path="/crew/crewA" element={<CrewA />} />
          <Route path="/crew/crewB" element={<CrewB />} />
          <Route path="/crew/crewC" element={<CrewC />} />
          <Route path="/crew/crewD" element={<CrewD />} />
          <Route path="/technology/techA" element={<TechnologyA />} />
          <Route path="/technology/techB" element={<TechnologyB />} />
          <Route path="/technology/techC" element={<TechnologyC />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
