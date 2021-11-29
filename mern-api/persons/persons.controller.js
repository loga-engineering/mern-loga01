const personsService = require('./persons.service');

const findAll = async (req, res) => {
    const persons = await personsService.findAll();
    res.json(persons);
}

const findById = async (req, res) => {
    const {id} = req.params;
    const person = await personsService.findById(id);
    res.json(person);
}

const create = async (req, res) => {
    let {body: person} = req;

    person = await personsService.create(person);

    res.json(person);
}

const update = async (req, res) => {
    const {id} = req.params;
    let {body: person} = req;

    person = await personsService.update(id, person);

    res.json(person);
}

const destroy = async (req, res) => {
    const {id} = req.params;

    await personsService.destroy(id);

    res.send('OK');
}

const search = async (req, res) => {
    let {body: args} = req;

    const persons = await personsService.search(args);

    res.json(persons);
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    destroy,
    search,
}
