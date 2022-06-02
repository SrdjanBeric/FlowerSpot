import React, { useEffect, useState } from "react";
import "./style/UserProfile.css";
import profilePicture from "../images/my-profile-picture.png";
import { useParams } from "react-router-dom";
import { getUserInfo, getUserSightings } from "../apis/UserApi";
import SightingContainer from "./SightingContainer";
function UserProfile() {
    let { user_id } = useParams();
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [sightings, setSightings] = useState([]);
    useEffect(() => {
        getUserInfo(user_id).then((response) => {
            setFirst_name(response?.data?.user?.first_name);
            setLast_name(response?.data?.user?.last_name);
        });
        getUserSightings(user_id).then((response) => {
            setSightings(response?.data?.sightings);
        });
    }, []);

    useEffect(() => {
        console.log(sightings);
    }, [sightings]);

    return (
        <div>
            <div className="user-profile-container">
                <div className="user-profile-header">
                    <img style={{ width: "80px" }} src={profilePicture} />
                    <div className="user-profile-header-text">
                        <p className="user-profile-header-name">
                            {first_name} {last_name}
                        </p>
                        <p className="user-profile-header-number-of-sightings">
                            47 sightings
                        </p>
                    </div>
                    <div style={{ width: "100%" }}>
                        <button className="user-profile-header-report-button">
                            Report
                        </button>
                    </div>
                </div>
            </div>
            <SightingContainer sightings={sightings} />
        </div>
    );
}

export default UserProfile;
