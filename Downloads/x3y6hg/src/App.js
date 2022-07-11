import Slide from "./Components/Slide";
import "./styles.css";
import React, { useState } from "react";
// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

export default function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <h2>{data[value].title}</h2>
      <h3>{data[value].description}</h3>
      <Slide />
      <button
        data-testid="prev"
        onClick={() => (value === 0 ? setValue(3) : setValue(value - 1))}
      >
        Prev
      </button>
      <button
        data-testid="next"
        onClick={() => (value === 3 ? setValue(0) : setValue(value + 1))}
      >
        Next
      </button>
    </div>
  );
}
