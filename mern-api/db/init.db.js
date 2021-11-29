const {sequelize} = require('./db');

require('../persons/person.model');


const initDb = async () => {
    try {
        await sequelize.sync();

        console.log('DB Sync OK');
    } catch (error) {
        console.log('DB Sync KO: ', error);
        throw error;
    }
}

module.exports = {
    initDb,
}
