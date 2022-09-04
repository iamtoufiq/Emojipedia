import React, { useState } from "react";
import "./App.css";

var emoJiDictionary = {
  "🚣": "Person Rowing Boat",
  "🗾": "Map of Japan",
  "🌋": "Volcano",
  "🏢": "Office Building",
  "🏟️": "Stadium",
  "🏞️": "National Park",
  "🏜️": "Desert",
};
var emojiWeKnow = Object.keys(emoJiDictionary);
// console.log(emojiWeKnow);

function App() {
  const [meaning, setMeaning] = useState("");

  const [mode, setMode] = useState({ bakcgrounColor: "blue" });

  function changeModeHandler() {
    if (mode.bakcgrounColor === "blue") {
      setMode({ bakcgrounColor: "red" });
      document.body.style.backgroundColor = "#1d2c37";
      document.body.style.color = "#fff";
    } else {
      setMode({ bakcgrounColor: "blue" });
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emoJiDictionary[userInput];
    // console.log(meaning);

    if (meaning === undefined) {
      meaning = "We don't have this in our dataBase";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emoJiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <>
      <div className="header" style={mode}>
        <label className="switch">
          <input type="checkbox" onClick={changeModeHandler} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="App">
        <h1>Inside out!</h1>
        <input className="extraa" onChange={emojiInputHandler} />
        <h2>
          <strong>{`${meaning}`}</strong>
        </h2>

        <h3>Emojis we Know</h3>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              onClick={function () {
                return emojiClickHandler(emoji);
              }}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={`${emoji}`}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </>
  );
}

export default App;
