import React, { useState } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Report from "../component/Report";

const Adminpanel = () => {
  const [showDashboard, setshowDashboard] = useState(false);

  return (
    <div className="admin-container">
      <Header setshowDashboard={setshowDashboard} showDashboard={showDashboard} />
      <Sidebar show={showDashboard} onClose={() => setshowDashboard(false)} />
      <main className="report-container">
        <Report />
      </main>
    </div>
  );
};

export default Adminpanel;
