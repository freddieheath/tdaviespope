import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import ProjectPage from "./components/page";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/project/:projectId" element={<ProjectPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
