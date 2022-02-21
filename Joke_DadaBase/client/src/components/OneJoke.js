import React, {useEffect, useState} from "react"; 
import axios from "axios";
import {Link} from "@reach/router"; 

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

    function randomJoke() {
        const gettingJoke =['This is Funny', 'okay'];
    }
    
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


    /*var jokeReturn = []
    let request = id.map(id =>{
        return new Promise((resolve, reject)=>{
            request({
                uri:("http://localhost:8000/api/jokes")+'?id' + id,
                method: 'GET'
            },
            (err.res.body)=>{
                if(err) {reject(err)}
            }))
        })
    })*/


    //The goal is to have a single joke display and when user clicks hear another, 
    //another joke is displayed. 
    //This can be done with display one in the array of jokes made, and having the button spit out
    //another element from that array, 






    console.log('this is my title', joke.title)
    console.log('this is my title', joke.punchline)
    return(
        <div>
            <header className="header">
            This is the header for the page
            <Link to={"/"}>Back to Home</Link>
            </header>


            <p>Title: {joke.title}</p>
            <p>Punchline: {joke.punchline}</p>
            

            <p>Information linked to database but not displaying a single joke</p>
            <p>When clicked from AllJokes, items are displayed in the fields</p>


            <Link to={"/jokes/:id"}>
                <button type="button">Hear Another</button>
            </Link>
            <br /><br />

            <Link to={"/new"}>
                <button type="button">Create A Joke</button>
            </Link>

            <Link to="/all">
                <button type="button">See All Jokes</button>
            </Link>

            <p>Hear Another is linked, but need to test, nothing displaying<br />
                Button New and All links to appropriate pages</p><br />
            
            

            <p>Loading One Joke Success</p>
        </div>
    )
}

export default OneJoke;