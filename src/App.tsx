import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex flex-1  max-w-screen-2xl min-h-screen bg-sky-50 flex-col">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
