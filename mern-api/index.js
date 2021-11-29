console.time('StartUp');

const express = require('express');
const {personRouter} = require('./persons');

const app = express();
app.use(express.json());

app.use('/persons', personRouter);

app.listen(8080, () => {
    console.log('App listen on 8080');
    console.timeEnd('StartUp');
});
