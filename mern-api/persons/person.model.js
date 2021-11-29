const {sequelize, Sequelize, defaultOptions} = require('../db/db');


const PersonModel = sequelize
    .define('PersonModel', {
        id: {type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true},
        name: {type: Sequelize.STRING},
        address: {type: Sequelize.STRING},
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'persons',
    });

module.exports = {
    PersonModel,
};
