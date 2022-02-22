import React, {useEffect, useState} from "react"; 
import axios from "axios";
import {Link, navigate} from "@reach/router";
import logo from "../images/logo.png"
import dad from "../images/dad.png"


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
            <Link to={"/"}><img src={logo} alt="logo" class="logo"/></Link>
            
            <Link to={"/"} className="link">Back to Home</Link><br />
            <Link to={"/all"} className="link">Back to All Jokes</Link>
            </header>

            <div className="jokeCard">
            <form onSubmit={editHandler}>
                <div>
                    <label style={{fontSize:"larger", fontWeight:"bold"}}>Title:</label>&nbsp;&nbsp;
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" /><br />
                    {
                        errors.title?
                        <span>{errors.title.message}</span>
                        :null
                    }
                </div><br />

                <div>
                    <label style={{fontSize:"larger", fontWeight:"400"}}>Punchline:</label>&nbsp;&nbsp;
                    <input value={punchline} onChange={(e)=>setPunchline(e.target.value)} type="text" /><br />
                    {
                        errors.punchline?
                        <span>{errors.punchline.message}</span>
                        :null
                    }
                </div><br />

                <button className="button">Edit Joke</button>
            </form>
                
                <div className="dadDIV">
                <img src={dad} alt="dad" class="dad"/> 
                </div>

            </div>
        </div>
    )
}

export default EditJoke;