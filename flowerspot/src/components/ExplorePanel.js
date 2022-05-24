import React, { useState, useEffect } from "react";
import "../components/style/ExplorePanel.css";
import coverImg from "../images/pl-hero.png";
import searchIcon from "../images/pl-icon-search.png";

import { getSearchedFlowers } from "../apis/FlowersAPI";

function ExplorePanel({ onSubmitSearch }) {
    const [searchValue, setSearchValue] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        onSubmitSearch(searchValue);
    };

    return (
        <div className="explore-container">
            <img className="coverImg" src={coverImg} />
            <div className="explore-content">
                <h2 className="explore-title">Discover flowers around you</h2>
                <p className="explore-description">
                    Explore between more than 8.427 sightings
                </p>
                <div className="input-area">
                    <form onSubmit={onSubmit}>
                        <div style={{ position: "relative" }}>
                            <input
                                className="explore-input"
                                placeholder="Looking for something specific?"
                                type="text"
                                value={searchValue}
                                onChange={(event) =>
                                    setSearchValue(event.target.value)
                                }
                            ></input>
                            <button
                                className="search-button"
                                onClick={() => onSubmit}
                            >
                                <img className="search-icon" src={searchIcon} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ExplorePanel;
