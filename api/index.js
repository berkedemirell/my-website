

import express from 'express';
import contactRouth from './route/contacts.js';


const app = express();

app.use(express.json())

app.use("/api/contacts", contactRouth)

app.listen(8800, () => {
    console.log("Connected")
 })