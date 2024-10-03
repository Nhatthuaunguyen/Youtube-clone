import React, { useState } from "react";
import "./Tabs.css"; 

function Tabs() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Music", "News", "Playlist", "Live stream", "New update", "Watch recently", "Top trending"];

  return (
    <div className="tabs-container">
        <div className="tabs">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`tab-button ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}>
                    {tab}
                </button>
            ))}
        </div>

      {/* Render content for the active tab */}
      <div className="tab-content">
        <h2>{activeTab}</h2>
        <p>This is content for the {activeTab} tab.</p>
      </div>
    </div>
  );
}

export default Tabs;