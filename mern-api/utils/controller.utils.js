const {toResponse} = require("../utils/http.utils");

const findAll = service => async (req, res) => {
    const rw = await service.findAll();
    return toResponse(res, rw);
}

const findById = service => async (req, res) => {
    const {id} = req.params;
    const rw = await service.findById(id);
    return toResponse(res, rw);
}

const create = service => async (req, res) => {
    let {body: person} = req;

    const rw = await service.create(person);

    return toResponse(res, rw);
}

const update = service => async (req, res) => {
    const {id} = req.params;
    let {body: person} = req;

    const rw = await service.update(id, person);

    return toResponse(res, rw);
}

const destroy = service => async (req, res) => {
    const {id} = req.params;

    const rw = await service.destroy(id);

    return toResponse(res, rw);
}

const search = service => async (req, res) => {
    let {query: args} = req;

    const rw = await service.search(args);

    return toResponse(res, rw);
}

const crud = service => {
    return {
        create: create(service),
        findAll: findAll(service),
        findById: findById(service),
        update: update(service),
        destroy: destroy(service),
        search: search(service),
    }
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    destroy,
    search,
    crud,
}
