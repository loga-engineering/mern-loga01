const {Sequelize} = require('../db/db');
const {PersonModel} = require('./person.model');

const findAll = () => PersonModel.findAll();

const findById = (id) => PersonModel.findOne({where: {id}});
const create = (person) => PersonModel.create(person);
const update = async (id, person) => {
    const _person = await PersonModel.findOne({where: {id}});
    if (!_person) return person;

    person = _person.set({...person});

    await person.save();
}
const destroy = (id) => PersonModel.destroy({where: {id}});

const search = async ({query}) => {
    let where = {};

    if(query) {
        query = `%${query}%`;
        where = {
            ...where,
            [Sequelize.Op.or] : {
                name: {
                    [Sequelize.Op.like]: query
                },
                address: {
                    [Sequelize.Op.like]: query
                }
            },
        }
    }

    return PersonModel.findAll({where});
}

module.exports = {
    findById,
    create,
    findAll,
    update,
    destroy,
    search,
}
