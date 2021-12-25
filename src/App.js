import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ContactPage from "./components/Pages/Contact";
import HomePage from "./components/Pages/Home";
import NewsPage from "./components/Pages/News";

function App() {
  return (
    <>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
