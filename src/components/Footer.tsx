import React from "react";
import "../styles/footer.scss"

export const Footer: React.FunctionComponent = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="content">
                <p>@ {currentYear} Ayala's Construction. All Rights Reserved.</p>
            </div>
            <div className="content">
                <p>Telephone: 571-501-9953</p>
            </div>
        </footer>
    )
}