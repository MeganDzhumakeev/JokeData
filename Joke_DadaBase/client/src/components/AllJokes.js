import React, {useEffect, useState} from "react"; 
import axios from "axios";
import {Link, navigate} from "@reach/router";
import logo from "../images/logo.png"
import dad from "../images/dad.png"

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

// <p>id: {joke._id}</p> 

    return(
        <div>
            
            <header className="header">
            <Link to={"/"}><img src={logo} alt="logo" class="logo"/></Link>

            <Link to={"/"} className="link">Back to Home</Link> <br />
            <Link to={"/new"} className="link">Create A Joke</Link>
            </header>
            <div className="allJokeCard">
            {
                jokeList.map((joke, index)=>(
                    <div key={index}>
                        <Link to={`/jokes/${joke._id}`} className="allJokesTitleLink">{joke.title}</Link><br />
                        <Link to={`/jokes/${joke._id}`} className="allJokesPunchlineLink">{joke.punchline}</Link><br /><br />
                        <Link to={`/jokes/edit/${joke._id}`}><button className="button">Edit Joke</button></Link>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>{alert("No Problem, Sport! I'll come up with some new material for ya!"); deleteJoke(joke._id)}} className="button">Delete</button><br /><br /><br />

                        
                    </div>
                ))
            }
            </div>
            
        </div>
    )
}

export default AllJokes;