import React from 'react'
import blackRound from "../../assets/images/Group 2608.svg"
import dp from "../../assets/images/person.svg"
import {Link} from "react-router-dom"


export default function SignUpName() {
    return (
        <div className="login">
            <div className="img-box">
                <img src={blackRound} alt="images" />
            </div>
            <h3>Enter your name</h3>
            <p>We can provide you the certificate with the entered name</p>
            <form>
                <div className="img-box">
                    <img src={dp} alt="images" />
                </div>
                <input type="password" placeholder="Enter your Name" ></input>   
            </form>
            <Link to="/supassword">
                <button className="submit">Continue</button>
            </Link>
        </div>
    )
}
