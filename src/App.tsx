import "./App.css";
import * as React from "react";
import useConfig from "./components/useConfig";

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  );
}
