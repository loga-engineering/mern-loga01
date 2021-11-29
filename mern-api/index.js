console.time('StartUp');

const express = require('express');
const cors = require('cors');

const {initDb} = require('./db/init.db');

const {personRouter} = require('./persons/persons.router');

initDb()
    .then(() => {

        const app = express();
        app.use(express.json());
        app.use(cors());

        app.use('/persons', personRouter);

        app.listen(8080, () => {
            console.log('App listen on 8080');
            console.timeEnd('StartUp');
        });
    })
    .catch((error) => {
        console.log('Error DB: ', error);
    });
