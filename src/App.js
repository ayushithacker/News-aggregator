import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const getNews = () => {
    axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=3583affe6f1f4884964cdfb2c709d6b7"
    );
    setData(data.articles);
  };

  return (
    <div className="App">
      <button className="btn btn-primary" onClick={getNews}>
        Fetch News
      </button>
    </div>
  );
}

export default App;
