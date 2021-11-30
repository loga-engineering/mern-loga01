const {
    GraphQLObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLInt, GraphQLString, GraphQLList
} = require('graphql');

const personService = require('./person.service');


const PersonType = new GraphQLObjectType({
    name: 'PersonType',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        address: {type: GraphQLString},
    }),
});


const PersonQuery = {
    personById: {
        type: PersonType,
        args: {id: {type: GraphQLInt}},
        resolve: async (source, {id}) => {
            const rw = await personService.findById(id);

            return rw.entity;
        },
    },
    searchPersons: {
        type: GraphQLList(PersonType),
        args: {
            query: {type: GraphQLString},
        },
        resolve: async (source, args) => {
            const rw = await personService.search(args);

            return rw.entity;
        },
    }
}

module.exports = {PersonType, PersonQuery};
