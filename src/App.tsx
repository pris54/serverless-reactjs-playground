import "./App.css";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import useConfig from "./components/useConfig";
import Header from "./components/Header";
import Error from "./components/Error";

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/test" element={<Header/>} />
        <Route path="/error/:code" element={<Error/>} />
        <Route path="*" element={<Header/>} />
      </Routes>
    </div>
  );
}
