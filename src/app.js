import express from "express";
import cors from "cors";

const app  =express();


app.use(cors({
    origin : "https://deploy-be-rdld.onrender.com"
}));

const users = [
  { id: 1, name: "moiz", email: "moiz@gmail.com" },
  { id: 2, name: "ali", email: "ali@gmail.com" },
  { id: 3, name: "ahmed", email: "ahmed@gmail.com" },
  { id: 4, name: "usman", email: "usman@gmail.com" },
  { id: 5, name: "hamza", email: "hamza@gmail.com" },
];

app.get("/api/users" , (req , res)=> {
    return res.status(200).json({data:users  , message: "Users fetched successfully."});
});

app.get("/api" , (_  , res )=> res.send("API is running."));

app.listen(5000 , ()=> {
    console.log("server is running.");
});