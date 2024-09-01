import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Hello</h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>About Me</h1><p>I am a potential student willing to excel in this field of front end development</p>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Me</h1><p>Phone:08133475964</p>");
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}.`);
});