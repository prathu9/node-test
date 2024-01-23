import express from 'express';
import apiRoute from "./routes/api";
import 'dotenv/config'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = process.env.PORT || 5500;

app.use("/", apiRoute);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
    console.log(`Open: http://localhost:${PORT}`);
})