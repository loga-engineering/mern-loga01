const {Sequelize} = require('../db/db');
const {PersonModel} = require('./person.model');
const {ok, ko} = require('../utils/response.wrapper');

const findAll = async () => {
    const persons = await PersonModel.findAll();

    return ok(persons);
}

const findById = async (id) => {
    const person = await PersonModel.findOne({where: {id}});

    return ok(person);
}

const create = async (person) => {
    const {name, address} = person;

    if (!name) return ko('Le nom est obligatoire');
    if (!address) return ko(`L'adresse nom est obligatoire`);

    person = await PersonModel.create(person);

    return ok(person);
};

const update = async (id, person) => {

    const _person = await PersonModel.findOne({where: {id}});
    if (!_person) return ko(`Cette personne n'existe pas`);

    person = _person.set({...person, id});

    await person.save();

    return ok(person);
}

const destroy = async (id) => {
    const _person = await PersonModel.findOne({where: {id}});
    if (!_person) return ko(`Cette personne n'existe pas`);

    await _person.destroy();

    return ok(id);
}

const search = async ({query}) => {
    let where = {};

    if (query) {
        query = `%${query}%`;
        where = {
            ...where,
            [Sequelize.Op.or]: {
                name: {
                    [Sequelize.Op.like]: query
                },
                address: {
                    [Sequelize.Op.like]: query
                }
            },
        }
    }

    console.log(where);

    const persons = await PersonModel.findAll(
        {where}
    );

    return ok(persons);
}

module.exports = {
    findById,
    create,
    findAll,
    update,
    destroy,
    search,
}
