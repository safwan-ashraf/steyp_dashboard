import React from 'react'
import {Link} from "react-router-dom"
import blackRound from "../../assets/images/Group 2608.svg"
import call from "../../assets/images/call.svg"

export default function SignUpPhone() {
    return (
        <div className="login">
            <div className="img-box">
                <img src={blackRound} alt="images" />
            </div>
            <h3>Steyp is an EdTech Company,a begining of the digital university for industry 4.0</h3>
            <p>An inventive collaboration for a smart dawn inclining kids to match their vision.</p>
            <form>
                <div className="img-box">
                    <img src={call} alt="images" />
                </div>
                <input type="number" placeholder="Enter your mobile number" ></input>
            </form>
            <Link to="/suname">
                <button  className="continue">Continue</button>
            </Link>
            <p className="new">Already have an account? 
                <Link to="/">
                    <span className="ancr acc">Login</span>
                </Link>
            </p> 

        </div>
    )
}
