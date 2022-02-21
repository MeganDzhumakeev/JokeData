import axios from "axios";
import React, {useEffect, useState} from "react"; //useEffect
//import axios from "axios;"
import {Link, navigate} from "@reach/router";
import logo from "../images/logo.png"

const Home = (props) =>{



    return(
        <div>
        <header className="header">
            This is the header for the page
            <img src={logo} alt="logo" class="logo"/>
        </header>
        <p>Hey Sport! What to Hear a Joke?</p>

        <Link to="/jokes/:id">
            <button type="button">Sure, Let's Hear it!</button>
        </Link>




            <p>Loaded HomePage was Successful</p>
            <p>Success Note: Button is linked to OneJoke, no other functions will be need here.<br />
                Goal was to have a main display with a button to link to one Joke.
            </p>
            <p>!!!!!!~Page Completed, Ready for CSS~!!!!!!</p>

        </div>
    )
}

export default Home;