import React from "react";
import SightingCard from "./SightingCard";
import "./style/SightingContainer.css";
function SightingContainer({ sightings }) {
    const renderSightings = sightings?.sightings?.map((sighting) => {
        return (
            <div key={sighting.id}>
                <SightingCard info={sighting} />
            </div>
        );
    });
    return <div className="sighting-container">{renderSightings}</div>;
}

export default SightingContainer;
