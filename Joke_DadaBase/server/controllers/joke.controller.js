const Joke = require("../models/joke.model");

module.exports ={

    findAllJokes: (req, res) =>{
        Joke.find()
            .then((allJokes)=>{
                console.log(allJokes);
                res.json(allJokes)
            })
            .catch((err)=>{
                console.log("Find all Jokes Failed");
                res.json({message:"Something went wrong in findAllJokes", error: err})
            })
    },

    createNewJoke: (req, res) =>{
        Joke.create(req.body)
            .then((newJoke)=>{
                console.log(newJoke);
                res.json(newJoke);
            })
            .catch((err)=>{
                console.log("Something went wrong in createNewJoke");
                res.status(400).json(err);
            })

            
    },

    findOneJoke: (req, res) =>{
        Joke.findOne({_id: req.params.id})
            .then((oneJoke)=>{
                console.log(oneJoke);
                res.json(oneJoke)
            })
            .catch((err)=>{
                console.log("Find One Joke Failed");
                res.json({message: "Something went wrong in findOneJoke", error: err})
            })
    },

    deleteJoke: (req, res) =>{
        console.log(req.params.id, "Checking on This")
        Joke.deleteOne({_id: req.params.id})
            .then((deletedJoke)=> {
                console.log(deletedJoke);
                res.json(deletedJoke);
            })
            .catch((err)=>{
                console.log("Delete One Joke Failed");
                res.json({message:"Something went wrong in deleteOneJoke", error: err})
            })
    },

    updateJoke: (req, res) =>{
        Joke.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
            .then((updatedJoke)=>{
                console.log(updatedJoke);
                res.json(updatedJoke)
            })
            .catch((err)=>{
                console.log("Something wen wrong in Update Joke");
                res.status(400).json(err);
            })
    }

}