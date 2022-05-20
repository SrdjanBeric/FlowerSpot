import React from "react";
import "./style/Registration.css";

function Registration() {
    return (
        <div className="registration-card">
            <div className="registration-content">
                <h3>Create an Account</h3>
                <input
                    className="registration-input"
                    placeholder="First Name"
                />
                <input className="registration-input" placeholder="Last Name" />
                <input
                    className="registration-input"
                    placeholder="Date of Birth"
                />
                <input
                    className="registration-input"
                    placeholder="Email Adress"
                />
                <input className="registration-input" placeholder="Password" />
                <button className="registration-button">Create Account</button>
            </div>
        </div>
    );
}

export default Registration;
