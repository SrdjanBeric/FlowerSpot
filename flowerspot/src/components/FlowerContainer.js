import React, { useState, useEffect } from "react";
import FlowerCard from "./FlowerCard";

function FlowerContainer(flowers) {
    const renderFlowers = flowers?.flowers?.map((flower) => {
        return (
            <div key={flower.id}>
                <FlowerCard info={flower} />
            </div>
        );
    });
    return <div className="flowers-container">{renderFlowers}</div>;
}

export default FlowerContainer;
