import './App.css';
import { Row, Col } from "react-bootstrap";

// components
import LeftNavigationBar from "./components/LeftNavigationBar";

// pages
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Supplies from "./pages/Supplies";

function App() {
  return (
    <div>
      <div style={{ height: "80px", backgroundColor: "blue" }}>
      </div>
      <div style={{ display: "flex" }}>
        <Col xs={3}>
          <LeftNavigationBar />
        </Col>
        <Col>
          <Dashboard />
          <Inventory />
          <Supplies />
        </Col>
      </div>
    </div>
  );
}

export default App;
