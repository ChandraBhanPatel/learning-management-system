import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddDomain from "./components/domain/AddDomain";
import ViewDomain from "./components/domain/ViewDomain";

import AddSector from "./components/sector/AddSector";
import ViewSector from "./components/sector/ViewSector";
import UpdateSector from "./components/sector/UpdateSector";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>

          {/* ===== DOMAIN ROUTES ===== */}
          <Route path="/" element={<ViewDomain />} />
          <Route path="/add-domain" element={<AddDomain />} />
          <Route path="/view-domain" element={<ViewDomain />} />

          {/* ===== SECTOR ROUTES ===== */}
          <Route path="/sector" element={<ViewSector />} />
          <Route path="/add-sector" element={<AddSector />} />
          <Route path="/update-sector/:id" element={<UpdateSector />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
