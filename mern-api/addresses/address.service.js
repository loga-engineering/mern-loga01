const {Sequelize} = require('../db/db');
const {AddressModel} = require('./address.model');
const {ok, ko} = require('../utils/response.wrapper');

const findAll = async () => {
    const addresses = await AddressModel.findAll();

    return ok(addresses);
}

const findById = async (id) => {
    const address = await AddressModel.findOne({where: {id}});

    return ok(address);
}

const create = async (address) => {
    const {ville, street, door} = address;

    if (!ville) return ko('La ville est obligatoire');
    if (!street) return ko(`La rue nom est obligatoire`);
    if (!door) return ko(`La porte nom est obligatoire`);

    address = await AddressModel.create(address);

    return ok(address);
};

const update = async (id, address) => {

    const _address = await AddressModel.findOne({where: {id}});
    if (!_address) return ko(`Cette adressne n'existe pas`);

    address = _address.set({...address, id});

    await address.save();

    return ok(address);
}

const destroy = async (id) => {
    const _address = await AddressModel.findOne({where: {id}});
    if (!_address) return ko(`Cette adressne n'existe pas`);

    await _address.destroy();

    return ok(id);
}

const search = async ({query}) => {
    let where = {};

    if (query) {
        query = `%${query}%`;
        where = {
            ...where,
            [Sequelize.Op.or]: {
                ville: {[Sequelize.Op.like]: query},
                street: {[Sequelize.Op.like]: query},
                door: {[Sequelize.Op.like]: query},
            },
        }
    }

    const addresses = await AddressModel.findAll({
        where,
        logging: console.log
    });

    return ok(addresses);
}

module.exports = {
    findById,
    create,
    findAll,
    update,
    destroy,
    search,
}
