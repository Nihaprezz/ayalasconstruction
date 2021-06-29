import React from "react";

export const Contact: React.FunctionComponent = () => {
    return (
        <div className="contact-page">
            <h1 className="title is-1">CONTACT</h1>
            <div className="social-contacts">
                <div className="icon is-large">
                    <i className="fab fa-facebook-square fa-3x"/>
                </div>
                <div className="icon is-large">
                    <i className="fab fa-instagram-square fa-3x"/>
                </div>
                <div className="icon is-large">
                    <i className="fas fa-envelope-square fa-3x"/>
                </div>
                <div className="icon is-large">
                    <i className="fas fa-phone-square fa-3x"/>
                </div>
            </div>
            <div className="form-container">
                <div className="field">
                    <div className="label">Name</div>
                    <div className="control">
                        <input className="input" type="text" placeholder="Name"/>
                    </div>
                </div>
                <div className="field">
                    <div className="label">Email</div>
                    <div className="control">
                        <input className="input" type="text" placeholder="Email"/>
                    </div>
                </div>
                <div className="field">
                    <div className="label">Phone Number</div>
                    <div className="control">
                        <input className="input" type="text" placeholder="Phone Number"/>
                    </div>
                </div>
                <div className="field">
                    <div className="label">Zip Code</div>
                    <div className="control">
                        <input className="input" type="text" placeholder="Zip Code"/>
                    </div>
                </div>
                <div className="field">
                    <div className="label">Message</div>
                    <div className="control">
                        <textarea className="textarea" 
                        placeholder="i.e. My municipality would like to receive a 
                        quote for tree inventory services."/>
                    </div>
                </div>
            </div>
        </div>
    );
};