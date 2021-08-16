import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "c59549e4";
  const APP_KEY = "22dcb7cadf1342d391729879df131f90";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Effect has been run");
  });

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button
          onClick={() => setCounter(counter + 1)}
          className="search-button"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
