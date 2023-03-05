import { Routes, Route } from "react-router-dom";

import { PageA, PageB, PageC } from "./pages/Pages";
import { Login } from "./pages/Login";

import "./styles/global.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageA />} />
      <Route path="/b" element={<PageB />} />
      <Route path="/c" element={<PageC />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
