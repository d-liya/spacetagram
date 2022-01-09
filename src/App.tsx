import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import ReadMore from "./components/ReadMore";

function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };
  return (
    <React.Fragment>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/read-more/:date" element={<ReadMore />} />
        </Routes>
      )}
    </React.Fragment>
  );
}

export default App;
