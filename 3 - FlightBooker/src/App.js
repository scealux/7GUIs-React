import React from "react";
import "./styles.css";

import FlightBooker from "./FlightBooker"
import MacBrowser from "./MacBrowser"

export default function App() {
  return (
    <div className="App">
      <MacBrowser title="Book Flight">
        <FlightBooker />
      </MacBrowser>
    </div>
  );
}
