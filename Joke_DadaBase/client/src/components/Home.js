import axios from "axios";
import React, {useEffect, useState} from "react"; //useEffect
//import axios from "axios;"
import {Link, navigate} from "@reach/router";
import logo from "../images/logo.png"
import dad from "../images/dad.png"


const Home = (props) =>{



    return(
        <div>
            <header className="header">
            <Link to={"/"}><img src={logo} alt="logo" class="logo"/></Link>

            </header>
            <div className="jokeCard">
            <br />
            <p style={{fontSize:"larger"}}><b>Hey Sport! What to Hear a Joke?</b></p>
            <br />
            <Link to="/jokes/:id">
                <button type="button" className="button">Sure, Let's Hear it!</button>
            </Link>

            <div className="dadDIV">
                    <img src={dad} alt="dad" class="dad"/> 
                </div>

            </div>

        </div>
    )
}

export default Home;