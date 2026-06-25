const express =require("express");
const app=express();

let port=3001;
app.listen(port,() =>
{
    console.log(`app is listening on port ${port}`);
});
app.use((req,res) =>
{
    console.log("request received");
    res.send("basic response");
});