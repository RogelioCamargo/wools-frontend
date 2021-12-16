import { Routes, Route } from "react-router-dom";

// components
import LeftNavigationBar from "./components/LeftNavigationBar";

// pages
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Supplies from "./pages/Supplies";

function App() {
  return (
    <div>
      <div className="bg-primary" style={{ height: "50px" }}></div>
      <div className="d-flex">
        <div className="col-3 bg-light">
          <LeftNavigationBar />
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/supplies" element={<Supplies />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
