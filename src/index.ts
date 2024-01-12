import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello")
});

app.listen(3000, () => {
    console.log("Server running on 3000");
    console.log("Open: http://localhost:3000");
})