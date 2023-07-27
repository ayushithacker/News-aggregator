import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=3583affe6f1f4884964cdfb2c709d6b7"
      )
      .then((response) => {
        console.log(response);
        // setData(response.data.articles);
        setData(response.data.articles);
      });
  };

  return (
    <div className="App">
      <button className="btn btn-primary" onClick={getNews}>
        Fetch News
      </button>
      <div className="container">
        <div className="row">
          {data.map((value) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <img
                      src={value.urlToImage}
                      class="card-img-top"
                      alt="..."
                    ></img>
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <button className="btn btn-primary"> Main News</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
