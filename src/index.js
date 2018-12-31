import React from "react";
import ReactDOM from "react-dom";

function printDate() {
  const date = new Date().toLocaleString();

  const dateElement = (
    <div>
      <h1 style={{ "font-size": "20px", color: "blue" }}>
        Current time in Bucharest: {date}
      </h1>
    </div>
  );

  return ReactDOM.render(dateElement, document.getElementById("tree"));
}

ReactDOM.render(<div>Test</div>, document.getElementById("tree"));
setInterval(printDate, 1000);
