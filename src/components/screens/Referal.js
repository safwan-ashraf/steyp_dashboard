import React from 'react'
import {Link} from "react-router-dom"
import blackRound from "../../assets/images/Group 2608.svg"
import Refer from "../../assets/images/coupon.svg"

export default function Referal() {
    return (
        <div className="login">
            <div className="img-box">
                <img src={blackRound} alt="images" />
            </div>
            <h3>Enter a Referal code</h3>
            <p>Please enter a referal code refer by your friend</p>
            <form>
                <div className="img-box">
                    <img src={Refer} alt="images" />
                </div>
                <input type="password" placeholder="Enter a referal code" ></input>   
            </form>
            <Link to="/dashboard">
                    <button className="Continue">Continue</button>
            </Link>
            <p className="new">Don't you have a referal code?  
                <Link to="/dashboard">
                    <span className="ancr acc">Skip for now</span>
                </Link>
            </p> 
        </div>
    )
}
