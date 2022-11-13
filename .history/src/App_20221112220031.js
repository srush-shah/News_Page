import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Fetch from "./pages/Fetch";
import { NotFound } from "./components/NotFound";
import SubCatPage from "./pages/SubCatPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hello" element={<He />} />
      {/* <Route path="/fetch" element={<Fetch />}></Route> */}
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
