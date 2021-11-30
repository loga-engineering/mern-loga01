console.time('StartUp');

require('dotenv').config();

console.log(process.env.PORT);

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {graphqlHTTP} = require('express-graphql');

const schema = require('./graphql.config');

const {initDb} = require('./db/init.db');

const {personRouter} = require('./persons/person.router');

initDb()
    .then(() => {

        const app = express();
        app.use(express.json());
        app.use(cors());
        app.use(morgan('tiny'));

        app.use('/persons', personRouter);
        // app.use('/addresse', personRouter);

        app.use('/graphql', graphqlHTTP({schema}));

        app.listen(8080, () => {
            console.log('App listen on 8080');
            console.timeEnd('StartUp');
        });
    })
    .catch((error) => {
        console.log('Error DB: ', error);
    });
