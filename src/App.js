import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// components
import LeftNavigationBar from "./components/LeftNavigationBar";
import { Offcanvas, Button } from "react-bootstrap";

// pages
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Supplies from "./pages/Supplies";

function App() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <div className="mw-100 overflow-x">
      <header className="bg-primary">
        <div className="d-flex align-items-center justify-content-between h-50px">
          <div className="col-3 p-0">
            <div className="w-50 mx-auto">
              <Link className="text-dark no-text-decoration" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M18 10.031v-6.423l-6.036-3.608-5.964 3.569v6.499l-6 3.224v7.216l6.136 3.492 5.864-3.393 5.864 3.393 6.136-3.492v-7.177l-6-3.3zm-1.143.036l-4.321 2.384v-4.956l4.321-2.539v5.111zm-4.895-8.71l4.272 2.596-4.268 2.509-4.176-2.554 4.172-2.551zm-.569 6.134v4.96l-4.25-2.421v-5.134l4.25 2.595zm-5.83 14.842l-4.421-2.539v-5.176l4.421 2.595v5.12zm-3.773-8.702l4.778-2.53 4.237 2.417-4.668 2.667-4.347-2.554zm4.917 3.587l4.722-2.697v5.056l-4.722 2.757v-5.116zm10.586 5.115l-4.722-2.757v-5.116l4.722 2.754v5.119zm-4.074-8.861l4.247-2.39 4.769 2.594-4.367 2.509-4.649-2.713zm9.638 6.323l-4.421 2.539v-5.116l4.421-2.538v5.115z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-3 p-0">
            <div className="d-flex w-50 mx-auto justify-content-end d-block d-sm-none">
              <Button onClick={toggleShow} className="p-0">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path
                    d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
                    fill="white"
                  />
                  <path
                    fill="white"
                    d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"
                  />
                </svg>
              </Button>
              <Offcanvas show={show} onHide={toggleShow} className="w-75">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p className="h6 pb-2">
                    <Link className="text-dark no-text-decoration" to="/">
                      Dashboard
                    </Link>
                  </p>
                  <p className="h6 pb-2">
                    <Link
                      className="text-dark no-text-decoration"
                      to="/inventory"
                    >
                      Inventory
                    </Link>
                  </p>
                  <p className="h6">
                    <Link
                      className="text-dark no-text-decoration"
                      to="/supplies"
                    >
                      Supplies
                    </Link>
                  </p>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </div>
      </header>
      <div className="row">
        <aside className="col-sm-3 d-none d-sm-block bg-light main-aside">
          <LeftNavigationBar />
        </aside>
        <main className="col-sm-9 main-content">
          <Routes>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/supplies" element={<Supplies />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
