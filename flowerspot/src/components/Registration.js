import React from "react";
import "./style/Registration.css";

function Registration() {
    return (
        <div className="registration-card">
            <div className="registration-content">
                <div className="registration-title">Create an Account</div>
                <div className="first-row">
                    <div className="registration-input-div">
                        <input className="registration-input short-input" />
                        <span class="registration-input-description">
                            First Name
                        </span>
                    </div>
                    <div className="registration-input-div">
                        <input className="registration-input short-input" />
                        <span class="registration-input-description">
                            First Name
                        </span>
                    </div>
                </div>
                <div className="registration-input-div">
                    <input className="registration-input" />
                    <span class="registration-input-description">
                        Date of Birth
                    </span>
                </div>
                <div className="registration-input-div">
                    <input className="registration-input" />
                    <span class="registration-input-description">
                        Email Adress
                    </span>
                </div>
                <div className="registration-input-div">
                    <input className="registration-input" />
                    <span class="registration-input-description">Password</span>
                </div>
                <button className="registration-button">Create Account</button>
            </div>
        </div>
    );
}

export default Registration;
