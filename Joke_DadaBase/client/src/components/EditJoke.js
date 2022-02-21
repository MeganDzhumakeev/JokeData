import React, {useEffect, useState} from "react"; 
import axios from "axios";
import {Link, navigate} from "@reach/router";


const EditJoke = (props) =>{

    const {id} = props;

    const [title, setTitle] = useState("");
    const [punchline, setPunchline] = useState("");
    const [errors, setErrors] = useState({}); 

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/jokes/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setTitle(res.data.title);
                setPunchline(res.data.punchline)
            })
            .catch((err)=>{
                console.log(err);
            });
    }, [])

    const editHandler = (e)=>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/jokes/${id}`,
        
        {
            title,
            punchline
        })

        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/all");
        })
        .catch((err)=>{
            console.log(err);
            console.log("err.response:", err.response);
            console.log("err.response.data:", err.response.data);
            console.log("err.response.data.errors:",
            err.response.data.errors);
            setErrors(err.response.data.errors)
        })
    }




    return(
        <div>
            <header className="header">
            This is the header for the page
            <Link to={"/"}>Back to Home</Link>
            <Link to={"/all"}>Back to All Jokes</Link>
            </header>

        <form onSubmit={editHandler}>
        <div>
            <label>Title:</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" /><br />
            {
                errors.title?
                <span>{errors.title.message}</span>
                :null
            }
        </div><br />

        <div>
            <label>Punchline:</label>
            <input value={punchline} onChange={(e)=>setPunchline(e.target.value)} type="text" /><br />
            {
                errors.punchline?
                <span>{errors.punchline.message}</span>
                :null
            }
        </div><br />

            <button>Edit Joke</button>
        </form>

        <p>Page Completed!!!</p>
            <p>Success:
                <br />Form is populating joke by ID
                <br />You can edit the field and submit the update to All Jokes.
                <br />SubmittionButton is submitting Joke to Data base and Saving to AllJokes
                <br />Validators are working!
                <br />Submittion redirects you to AllJoke for viewing!!</p>
        </div>
    )
}

export default EditJoke;