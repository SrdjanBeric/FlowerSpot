import React, { useState, useEffect } from "react";
import ExplorePanel from "./components/ExplorePanel";
import FlowerCard from "./components/FlowerCard";
import FlowerContainer from "./components/FlowerContainer";
import Navigationbar from "./components/Navigationbar";
import "./components/style/Main.css";
import axios from "axios";
import HomePage from "./components/HomePage";
import Registration from "./components/Registration";

function App() {
    return (
        <div className="main-page">
            {/* <Navigationbar />
            <HomePage /> */}
            <Registration />
        </div>
    );
}

export default App;
