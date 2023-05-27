import Navbar from "./pages/navbar/Navbar";
import "./App.css";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import XWinder from "./pages/projects/xwinder/xwinder_page";
import Contact from "./pages/Contact";
import Scheduler from "./pages/projects/scheduler/scheduler_page";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/xwinder" element={<XWinder />} />
          <Route path="/projects/scheduler" element={<Scheduler />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
