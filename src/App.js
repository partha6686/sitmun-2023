import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import TeamPage from "./pages/Team";
import CommitteePage from "./pages/CommitteePage";
// const Navbar = React.lazy(() => import("./components/common/Navbar"));
// const Home = React.lazy(() => import("./pages/Home"));
// const TeamPage = React.lazy(() => import("./pages/Team"));
// const CommitteePage = React.lazy(() => import("./pages/CommitteePage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Suspense fallback={<div style={{ color: "white" }}>Loading...</div>}>
          
        </Suspense> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/committee" element={<CommitteePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
