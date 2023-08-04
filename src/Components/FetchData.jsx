import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FetchData = ({ cat }) => {
  const [Data, setData] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get(
          cat
            ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=3583affe6f1f4884964cdfb2c709d6b7`
            : "https://newsapi.org/v2/top-headlines?country=in&apiKey=3583affe6f1f4884964cdfb2c709d6b7"
        )
        .then((res) => setData(res.data.articles));
    };
    fetchdata();
  }, [cat]);

  return (
    <div className="container  my-4">
      <h3>
        <u>TOP HEADLINE</u>
      </h3>{" "}
      <div className="container d-flex justify-content-center align-items-cemter flex-column my-2 ">
        {Data
          ? Data.map((items, index) => (
              <>
                <div
                  className="container my-3 p-3"
                  style={{ width: "600px", boxShadow: "2px 2px 10px black" }}
                >
                  <h5 className="my-2">{items.title}</h5>
                  <img
                    src={items.urlToImage}
                    alt="/"
                    className="img-fluid d-flex justify-content-center align-items-cemter"
                    style={{ width: "100%", height: "300px" }}
                  ></img>
                  <p className="my-1">{items.description}</p>
                  <Link to={items.url}>View More</Link>
                </div>
              </>
            ))
          : "Loading.."}
      </div>
    </div>
  );
};

export default FetchData;
