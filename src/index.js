import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import CommitteePage from "./pages/CommitteePage";
import Home from "./pages/Home";
import TeamPage from "./pages/Team";
// import Merchandise from "./pages/merchandise";
// import NotFound from "./components/common/notfound";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/committee" element={<CommitteePage />} />
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>

  </>,
  document.getElementById("root")
);