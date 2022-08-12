import React, { useState, useEffect } from "react";
import Categories from "./Categories";

//TYpes

export interface JokeType {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

const empty = {
  categories: [""],
  created_at: "",
  icon_url: "",
  id: "",
  updated_at: "",
  url: "",
  value: "",
};

const App: React.FC = () => {
  const [joke, setJoke] = useState<JokeType>(empty);
  const [category, setCategory] = useState("animal");

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => response.json())
      .then((res) => setJoke(res))
      .catch((err) => console.log(err));
  }, [category]);
  console.log(joke);

  return (
    <div className="App">
      <h1
        style={{
          fontFamily: "Bungee Shade",
          color: "orange",
          textAlign: "center",
          fontSize: "30px",
        }}
      >
        Random Chuck Norris Joke Generator
      </h1>
      <div style={{ display: "flex" }}>
        <Categories category={category} setCategory={setCategory} />
        <div
          style={{
            width: "74%",
            fontSize: "20px",
            border: "2px solid orange",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            height: "83vh",
            justifyContent: " center",
            padding:'0 10px 0 10px'
          }}
        >
          {joke.value === "" ? <h1>Loading....</h1> : <h4>{joke.value}</h4>}
        </div>
      </div>
    </div>
  );
};

export default App;
