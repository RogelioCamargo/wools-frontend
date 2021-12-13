import './App.css';
import { Routes, Route } from "react-router-dom";
import { Col } from "react-bootstrap";

// components
import LeftNavigationBar from "./components/LeftNavigationBar";

// pages
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Supplies from "./pages/Supplies";

function App() {
  return (
    <div>
      <div style={{ height: "80px", backgroundColor: "blue" }}></div>
      <div style={{ display: "flex" }}>
        <Col xs={3}>
          <LeftNavigationBar />
        </Col>
        <Col>
          <Routes>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/supplies" element={<Supplies />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Col>
      </div>
    </div>
  );
}

export default App;
