const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const {AddressQuery} = require('./addresses/address.gql');
const {PersonQuery} = require('./persons/person.gql');

const query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...AddressQuery,
        ...PersonQuery,
    },
});

// const mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: {
//
//     },
// });

module.exports = new GraphQLSchema({ query });
