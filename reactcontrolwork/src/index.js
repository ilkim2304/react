import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Color from "./Color.js";

const tints = ["1 tint", "2 tint", "3 tint", "4 tint", "5 tint", "6 tint", "7 tint", "8 tint"];
const triad = ["red", "green", "blue"];

ReactDOM.render(
  <div>
    <div className="tints">
      {tints.map(val => <Color txt={val} />)}
    </div>
    <div className="triad">
      {triad.map(val => <Color txt={val} />)}
    </div>
  </div>,
  document.querySelector(".app")
);
