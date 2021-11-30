const personsService = require('./persons.service');
const {toResponse} = require("../utils/http.utils");

const findAll = async (req, res) => {
    const rw = await personsService.findAll();
    return toResponse(res, rw);
}

const findById = async (req, res) => {
    const {id} = req.params;
    const rw = await personsService.findById(id);
    return toResponse(res, rw);
}

const create = async (req, res) => {
    let {body: person} = req;

    const rw = await personsService.create(person);

    return toResponse(res, rw);
}

const update = async (req, res) => {
    const {id} = req.params;
    let {body: person} = req;

    const rw = await personsService.update(id, person);

    return toResponse(res, rw);
}

const destroy = async (req, res) => {
    const {id} = req.params;

    const rw = await personsService.destroy(id);

    return toResponse(res, rw);
}

const search = async (req, res) => {
    let {query: args} = req;

    const rw = await personsService.search(args);

    return toResponse(res, rw);
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    destroy,
    search,
}
