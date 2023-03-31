import express, { Request, Response } from 'express';
import { characterRoute } from './routes/characters.route';
import { dbConnection } from '../datasource';
const app = express();
const port = 3000;

app.use(express.json());

dbConnection();

app.use('/character', characterRoute);

app.get('/', (req: Request, res: Response) => {
    res.json("ok")
})

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
})
