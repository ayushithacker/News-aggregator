import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FetchData from "./Components/FetchData";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route
            exact
            path="/business"
            element={<FetchData cat="business" />}
          />
          <Route
            exact
            path="/technology"
            element={<FetchData cat="technology" />}
          />
          <Route exact path="/health" element={<FetchData cat="health" />} />
          <Route exact path="/science" element={<FetchData cat="science" />} />
          <Route
            exact
            path="/entertainment"
            element={<FetchData cat="entertainment" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
