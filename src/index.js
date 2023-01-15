import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/layout-page";
import Home from "./Pages/home-page";
import About from "./Pages/about-page";
import Contact from "./Pages/contact-page";
import Education from "./Pages/education-page";
import Experience from "./Pages/experience-page";
import NoPage from "./Pages/nopage-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-page" element={<About />} />
          <Route path="contact-page" element={<Contact />} />
          <Route path="education-page" element={<Education />} />
          <Route path="experience-page" element={<Experience />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));