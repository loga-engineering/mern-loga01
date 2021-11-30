const {
    GraphQLObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLInt, GraphQLString, GraphQLList
} = require('graphql');

const addressService = require('./address.service');


const AddressType = new GraphQLObjectType({
    name: 'AddressType',
    fields: () => ({
        id: {type: GraphQLInt},
        ville: {type: GraphQLString},
        street: {type: GraphQLString},
        door: {type: GraphQLString},
    }),
});


const AddressQuery = {
    addressById: {
        type: AddressType,
        args: {id: {type: GraphQLInt}},
        resolve: async (source, {id}) => {
            return  addressService.findById(id);
        },
    },
    searchAddresses: {
        type: GraphQLList(AddressType),
        args: {
            query: {type: GraphQLString},
        },
        resolve: async (source, args) => {
            return addressService.search(args);
        },
    }
}

module.exports = {AddressType, AddressQuery};
