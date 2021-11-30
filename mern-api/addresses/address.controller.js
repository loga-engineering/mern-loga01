const addressService = require('./address.service');
const {crud} = require("../utils/controller.utils");

const {findAll, findById, create, update, destroy, search} = crud(addressService);

module.exports = {
    create,
    findAll,
    findById,
    update,
    destroy,
    search,
}
