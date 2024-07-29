import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./Title";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/title" element={<Title />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
