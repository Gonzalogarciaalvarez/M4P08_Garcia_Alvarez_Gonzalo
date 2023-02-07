import React, { useState } from "react";

function Button({ text, onClick }) {
  return (
    <button style={{ width: "50px", height: "50px" }} onClick={onClick}>
      {text}
    </button>
  );
}

function Keyboard({ onClick }) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const buttons = [...letters, " ", "Borrar"];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", border: "1px solid black" }}>
      {buttons.map((btn, index) => (
        <Button key={index} text={btn} onClick={() => onClick(btn)} />
      ))}
    </div>
  );
}

function Result() {
  const [value, setValue] = useState("");

  const handleClick = (text) => {
    if (text === "Borrar") {
      setValue(value.slice(0, -1));
    } else {
      setValue(value + text);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ textAlign: "center", border: "1px solid black", padding: "10px" }}>
        <h3>Resultado:</h3>
        <p style={{ border: "1px solid black", padding: "10px" }}>{value}</p>
        <Keyboard onClick={handleClick} />
      </div>
    </div>
  );
}

export default Result;
