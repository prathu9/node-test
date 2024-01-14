import express from 'express';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 5500;

app.get("/", (req, res) => {
    res.status(200).send("Hello")
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
    console.log(`Open: http://localhost:${PORT}`);
})