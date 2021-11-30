const {Router} = require('express');
const {create, findAll, findById, update, destroy, search} = require('./address.controller');

const personRouter = Router();

personRouter.route('/search').get(search);
personRouter.route('/').get(findAll).post(create);
personRouter.route('/:id').get(findById).put(update).delete(destroy);

module.exports = {
    personRouter
}
