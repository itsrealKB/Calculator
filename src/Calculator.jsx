import { useState } from "react";
import Buttons from "./Buttons";
import "./calculator.css";
import buttonsData from "./buttonsData";
export default function Calculator() {
  const [display, setDisplay] = useState("");

  const BUTTONS = buttonsData.map((buttons) => {
    return (
      <Buttons
        value={buttons.value}
        key={buttons.id}
        handleClick={displayValue}
      />
    );
  });

  function displayValue(event) {
    if (event.target.value === "AC") {
      setDisplay("");
    } else if (event.target.value === "DE") {
      if (display === "" || display.length === 1) {
        setDisplay("");
      } else {
        const newDisplay = display;
        setDisplay(newDisplay.slice(0, -1));
      }
    } else if (event.target.value === "=") {
      if (display === "") {
        setDisplay("");
      } else if (display.charAt(display.length - 1) === "+") {
        return display;
      } else {
        const result = eval(display).toString();
        setDisplay(result);
      }
    } else if (event.target.value === "." && display.includes(".")) {
      return display;
    } else if (event.target.value === "/" && display.includes("/")) {
      return display;
    } else if (event.target.value === "*" && display.includes("*")) {
      return display;
    } else if (event.target.value === "-" && display.includes("-")) {
      return display;
    } else if (event.target.value === "+" && display.includes("+")) {
      return display;
    } else if (event.target.value === "0" && display === "0") {
      return display;
    } else if (event.target.value === "00" && display === "00") {
      return display;
    } else {
      setDisplay((prevDisplay) => (prevDisplay += event.target.value));
    }
  }

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      {BUTTONS}
    </div>
  );
}
