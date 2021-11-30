const {sequelize, Sequelize, defaultOptions} = require('../db/db');


const AddressModel = sequelize
    .define('AddressModel', {
        id: {type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true},
        ville: {type: Sequelize.STRING},
        street: {type: Sequelize.STRING},
        door: {type: Sequelize.STRING},
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'addresses',
    });

module.exports = {
    AddressModel,
};
