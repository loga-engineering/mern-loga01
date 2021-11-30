const personsService = require('./person.service');
const {crud} = require("../utils/controller.utils");

const {findAll, findById, create, update, destroy, search} = crud(personsService);

module.exports = {
    create,
    findAll,
    findById,
    update,
    destroy,
    search,
}
