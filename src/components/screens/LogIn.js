import React from 'react'
import {Link} from "react-router-dom"
import blackRound from "../../assets/images/Group 2608.svg"
import call from "../../assets/images/call.svg"


export default function LogIn() {
    return (
        <div className="login">
            <div className="img-box">
                <img src={blackRound} alt="images" />
            </div>
            <h3>Let's root together and watch other grow</h3>
            <p>An intensive collaboration for a smart dawn inclining kids to match their vision.</p>
            <form>
                <div className="img-box">
                    <img src={call} alt="images" />
                </div>
                <input type="number" placeholder="Enter your mobile number" ></input>
            </form>
            <Link to="/pswrd1">
                <span className="ancr forget">Forget Password?</span>
            </Link>
            <Link to="/login">
                <button Link to="/login" className="continue">Continue</button>
            </Link>
            <p className="new">New to Steyp? 
                <Link to="/suphone">
                    <span className="ancr acc">Create account</span>
                </Link>
            </p> 
            
            
        </div>
    )
}
