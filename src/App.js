import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import TeamPage from "./pages/Team";
import CommitteePage from "./pages/CommitteePage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
