import React, { useState, useEffect } from "react";
import "../components/style/ExplorePanel.css";
import coverImg from "../images/pl-hero.png";
import searchIcon from "../images/pl-icon-search.png";

import { getSearchedFlowers } from "../apis/FlowersAPI";

function ExplorePanel({ onSubmitSearch }) {
    const [searchValue, setSearchValue] = useState("");
    // const [searchedFlowers, setSearchedFlowers] = useState([]);

    const onSubmit = (event) => {
        event.preventDefault();
        onSubmitSearch(searchValue);
        // getSearchedFlowers(searchValue)?.then((resp) => {
        // setSearchedFlowers(resp);
        // });
    };

    // useEffect(() => {
    //     search = searchedFlowers;
    //     console.log(searchedFlowers);
    // }, [searchedFlowers]);

    return (
        <div className="container">
            <img className="coverImg" src={coverImg} />
            <div className="center-content">
                <h2 className="title">Discover flowers around you</h2>
                <p className="description">
                    Explore between more than 8.427 sightings
                </p>
                <div className="input-area">
                    <form onSubmit={onSubmit}>
                        <input
                            className="input-field"
                            placeholder="Looking for something specific?"
                            type="text"
                            value={searchValue}
                            onChange={(event) =>
                                setSearchValue(event.target.value)
                            }
                        ></input>
                        <i className="icon" src={searchIcon}></i>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ExplorePanel;
