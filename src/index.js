import React from "react";
import ReactDOM from "react-dom";

const today = new Date();
const curHr = today.getHours();
let greeting;

const customStyle = {
  color: ""
};

if (curHr < 12) {
  greeting = "good morning";
  customStyle.color = "red";
} else if (curHr >= 12 && curHr < 16) {
  greeting = "good afternoon";
  customStyle.color = "green";
} else {
  greeting = "good evening";
  customStyle.color = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blu//
