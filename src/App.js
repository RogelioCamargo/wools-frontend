import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components
import LeftNavigationBar from "./components/LeftNavigationBar";
import Header from "./components/Header";

// pages
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Supplies from "./pages/Supplies";

function App() {
  return (
    <div className="mw-100 mh-100 overflow-x-hidden">
      <Header />
      <div className="row">
        <aside className="col-sm-3 d-none d-sm-block bg-light main-aside">
          <LeftNavigationBar />
        </aside>
        <main className="col-sm-9 main-content pb-10">
          <Routes>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/supplies" element={<Supplies />} />
            <Route path="/" element={<Dashboard />} />
						<Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
