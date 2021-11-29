const {Router} = require('express');
const persons = require('./fakePersons');

const personRouter = Router();

personRouter
    .route('/')
    .get((req, res) => {
        res.json(persons);
    }).post((req, res) => {
    const {body} = req;

    persons.push(body);

    res.json(body);
})

// personRouter.get('/', (req, res) => {
//     res.json(persons);
// })
//
// personRouter.post('/', (req, res) => {
//     const {body} = req;
//
//     persons.push(body);
//
//     res.json(body);
// })

module.exports = {
    personRouter
}
