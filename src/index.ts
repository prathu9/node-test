import express from 'express';
import apiRoute from "./routes/api";
import 'dotenv/config'
import { AppDataSource } from './datasource';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = process.env.PORT || 5500;

app.use("/", apiRoute);

AppDataSource.initialize()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
        console.log(`Open: http://localhost:${PORT}`);
    })
})
.catch(err => {
    console.log(err);
})
