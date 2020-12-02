import React from "react";
import "./styles.css";

import TempConv from "./TempConv"
import MacBrowser from "./MacBrowser"

export default function App() {
  return (
    <div className="App">
      <MacBrowser title="TempConv">
        <TempConv />
      </MacBrowser>
    </div>
  );
}
