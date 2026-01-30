import express from "express";

const app = express();

const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  return res.status(200).json({msg:"app running"});
});

app.listen(PORT, ()=>{
    console.log("server running on port: ", PORT)
})