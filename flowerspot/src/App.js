import React from "react";
import ExplorePanel from "./components/ExplorePanel";
import FlowerCard from "./components/FlowerCard";
import FlowerContainer from "./components/FlowerContainer";
import Navigationbar from "./components/Navigationbar";
import "./components/style/Main.css";

function App() {
    return (
        <div className="main-page">
            <Navigationbar />
            <ExplorePanel />
            <FlowerContainer className="flowers-container"/>
            {/* <div className="flowers-container">
                <FlowerCard />
                <FlowerCard />
                <FlowerCard />
                <FlowerCard />
                <FlowerCard />
                <FlowerCard />
                <FlowerCard />
                <FlowerCard />
            </div> */}
        </div>
    );
}

export default App;
