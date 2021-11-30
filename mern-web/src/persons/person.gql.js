import {gql, useQuery, useLazyQuery} from '@apollo/client';

export let needRefresh = false;
export const setRefresh = (value) => needRefresh = value;


const GET_PERSON_BY_ID = gql`
    query PersonById($id: Int!) {
        personById(id: $id) {
            id name address
        }
    }
`;

// export const usePersonById = (id) => {
//     id = parseInt(id);
//     return useQuery(GET_PERSON_BY_ID, {
//         variables: {id},
//     });
// }

// export const usePerimeter = (id) => {
//     const result = usePerimeterById(id);
//     return parseEntity(result, 'perimeterById');
// }

export const SEARCH_PERSONS = gql`
    query SearchPersons($query: String) {
        searchPersons(query: $query) {
            id name address
        }
    }
`;

// export const useSearchPerimeters = ({query, region, page = 0, size = 20}) => {
//     return useLazyQuery(SEARCH_PERIMETERS, {
//         variables: {query, region, page, size},
//     });
// }
//
//
// export const parseEntity = (result, key) => {
//     const {data, loading, error: _error} = result;
//
//     if (loading) return {loading}
//
//     if (_error) return {loading, error: true, errorMessage: `Erreur lors de l'operation`}
//
//     const {entity, error, message: errorMessage} = data[key];
//
//     return {entity, error, errorMessage};
//
// }
