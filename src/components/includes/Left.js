import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../../assets/images/logo.svg"

export default function Left() {
    return (
        <div className="left-section">
            <Link to="/">
                <div className="logo-box">
                    <img src={Logo} alt="Logo" />
                </div>
            </Link>
        </div>
    )
}
