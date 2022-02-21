import React, {useEffect, useState} from "react"; 
import axios from "axios";
import {Link, navigate} from "@reach/router";

const AllJokes = (props) =>{

    const {id} = props;

    const [jokeList, setJokeList] = useState([]);
    const [isDeleted, setisDeleted] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/jokes")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setJokeList(res.data);
                setisDeleted(false);
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [isDeleted]);


    const deleteJoke = (id) =>{
        console.log(id);
        axios.delete(`http://localhost:8000/api/jokes/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setisDeleted(true);
            navigate("/all");
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }



    return(
        <div>
            <header className="header">
            This is the header for the page
            <Link to={"/"}>Back to Home</Link>
            <Link to={"/new"}>Create A Joke</Link>
            </header>
            {
                jokeList.map((joke, index)=>(
                    <div key={index}>
                        <Link to={`/jokes/${joke._id}`}>Title: {joke.title}</Link><br />
                        <Link to={`/jokes/${joke._id}`}>Punchline: {joke.punchline}</Link><br /><br />
                        <Link to={`/jokes/edit/${joke._id}`}><button>Edit Joke</button></Link>
                        <p>id: {joke._id}</p>

                        <button onClick={()=>{alert("Ohno"); deleteJoke(joke._id)}}>Delete</button><br /><br />

                        
                    </div>
                    
                    
                ))
            }

            <p>CSS will need to be applied to remove the spaceing, this has been fixed temp<br />
            with breaks, br, for the time being</p>

            <p>Page Completed!</p>
                
            <p>Success:
                <br />All Jokes displays everything in Database.
                <br />Edit Joke button redierect to updating joke by ID
                <br />Delete Joke delteing from database and spiting out an alert</p>
            
        </div>
    )
}

export default AllJokes;