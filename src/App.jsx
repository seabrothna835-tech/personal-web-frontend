import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MainWeb from "./pages/MainWeb";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainWeb />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;