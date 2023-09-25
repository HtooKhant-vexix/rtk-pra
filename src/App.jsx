import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Sidebar />
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
