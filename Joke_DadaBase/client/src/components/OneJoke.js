import React, {useEffect, useState} from "react"; 
import axios from "axios";
import {Link} from "@reach/router"; 
import logo from "../images/logo.png"
import dad from "../images/dad.png"

const OneJoke = (props) =>{
    console.log('looking at my props', props);
    const {id} = props;

    const [joke, setJoke] =useState([]);
    const [allJokes, setAllJokes] =useState([]);
    const [initalRender, setInitalRender] = useState(true)
    const [placeholderJoke, setPlaceholderJoke] = useState({})
    // if id is invalid,fetch all yours jokes
    // inside your fetch, Math.random()as your index to grab a random joke
    // set displayJoke, setDisplayJoke to false 

    useEffect(()=>{
        axios.get("http://localhost:8000/api/jokes")
            .then((res)=>{
                let jokesArray= res.data;
                let numberOfJokes = jokesArray.length;
                let randomJokeIndex = Math.floor(Math.random() * numberOfJokes) + 1 - 1 ; 
                let randomJoke = jokesArray[randomJokeIndex];
                setPlaceholderJoke(randomJoke);
                setInitalRender(false);
                //console.log(randomJoke._id);
            })
            .catch((err)=>{
                console.log(err)

            })
    }, [])

    // function randomJoke() {
    //     const gettingJoke =['This is Funny', 'okay'];
    // }
    
    useEffect(()=>{
        console.log('in useEffect looking for the ID', id)
        if (! initalRender) {
            axios.get(`http://localhost:8000/api/jokes/${placeholderJoke._id}`)
            
                .then((res)=>{
                    console.log(res);
                    console.log(res.data);
                    setJoke(res.data);
                })
                .catch((err)=>{
                    console.log(err)
                }) 
            } 
    }, [initalRender]) 


//console.log('this is my title', joke.title)
    //console.log('this is my title', joke.punchline)



    //////////////
    // <Link to={"/jokes/:id"}>
    //             <button type="button">Hear Another</button>
    //         </Link>
    //         <br /><br />
    /////////////



    return(
        <div>
            <header className="header">
            <Link to={"/"}><img src={logo} alt="logo" class="logo"/></Link>
            
            <Link to={"/"} className="link">Back to Home</Link>
            </header>

            

                <div className="jokeCard">
                <p className="jokeTitle">{joke.title}</p>
                <p className="jokePunchline">{joke.punchline}</p>
                <br />

                <Link to={"/new"}>
                    <button type="button" className="button">Create A Joke</button>
                </Link>
                &nbsp;&nbsp;&nbsp;

                <Link to="/all">
                    <button type="button" className="button">See All Jokes</button>
                </Link>

                    <div className="dadDIV">
                    <img src={dad} alt="dad" class="dad"/> 
                    </div>
                

                </div>
        </div>
    )
}

export default OneJoke;