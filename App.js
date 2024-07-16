import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CommunityPage from "./CommunityPage";
import RegisterWalkPage from "./RegisterWalkPage";

function App() {
  return (
    <Routes>
      <Route path="/" exact component={HomePage} />
      <Route path="/community" component={CommunityPage} />
      <Route path="/register-walk" component={RegisterWalkPage} />
    </Routes>
  );
}

export default App;
