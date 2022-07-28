import { useState, useEffect } from "react";

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

// const empty = {
//   categories: [""],
//   created_at: "",
//   icon_url: "",
//   id: "",
//   updated_at: "",
//   url: "",
//   value: "",
// };

function App() {
  const [joke, setJoke] = useState<JokeType[]>([]);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/search?query=sea")
      .then((response) => response.json())
      .then((res) => setJoke(res.result.slice(10)))
      .catch((err) => console.log(err));
  }, []);
  console.log(joke);

  return (
    <div className="App">
      <h1 style={{ fontFamily: "Bungee Shade", color: "orange" }}>
        Chuck Norris Jokes
      </h1>
      {joke.length <= 0 ? (
        <h1>Loading....</h1>
      ) : (
        joke.map((jo: JokeType, index) => {
          return (
            <div key={jo.id}>
              <h4>
                {index + 1}.{jo.value}
              </h4>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
