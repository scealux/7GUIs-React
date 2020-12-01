import React from "react";
import "./styles.css";

import Counter from "./Counter"
import MacBrowser from "./MacBrowser"

export default function App() {
  return (
    <div className="App">
      <MacBrowser title="Counter">
        <Counter />
      </MacBrowser>
    </div>
  );
}
