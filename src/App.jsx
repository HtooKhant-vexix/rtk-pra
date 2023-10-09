import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="bg-primary/20 h-screen overflow-scroll">
      <Sidebar />
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </div>
  );
};

export default App;
