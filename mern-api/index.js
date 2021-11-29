console.time('StartUp');

const express = require('express');
const {personRouter} = require('./persons');

const app = express();

const firstMiddleware = (req, res, next) => {
    next();
}

const secondMiddleware = (req, res, next) => {
    next();
}

app.use(firstMiddleware);
app.use(secondMiddleware);

const testGet = (req, res) => {
    res.send('Hello');
}

app.get('/test/:name', testGet);

app.get('/', testGet);

app.listen(8080, () => {
    console.log('App listen on 8080');
    console.timeEnd('StartUp');
});
