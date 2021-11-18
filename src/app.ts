import express from 'express';
import dotenv from 'dotenv';
import { Sequelize  } from 'sequelize';
import {initializeMySqlConnection} from './infra/sequelize'

const app = express();
dotenv.config();

initializeMySqlConnection();

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});





