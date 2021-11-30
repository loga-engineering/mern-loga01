import React, {useEffect, useState} from 'react';

import {CircularProgress, Box, IconButton, Container, Card, Table, TableBody, TableHead, TableRow, TableCell, TableContainer} from '@mui/material';

import TextField from "@mui/material/TextField";
// import {usePersons} from "./person.hooks";
import {useQuery} from "@apollo/client";
import {SEARCH_PERSONS} from "./person.gql";

export default function PersonList() {

    const [query, setQuery] = useState('');
    const [persons, setPersons] = useState([]);

    // const {query, setQuery, data: persons, fetchData, loading} = usePersons();

    const {loading, data, error, refetch} = useQuery(SEARCH_PERSONS, {
        variables: {query},
    });

    useEffect(() => {
        if(loading) return;
        if(error) {
            //TODO: Show error
            return;
        }

        setPersons(data.searchPersons);
    }, [loading, data]);

    return (
        <Container>
            <Card sx={{
                mt: 10
            }}>
                <Box sx={{
                    display: 'flex',
                    direction: 'row',
                    justifyContent: 'space-between'
                }}>
                    <TextField value={query} onChange={(e) => setQuery(e.target.value)} placeholder='recherche' sx={{
                        m: 2,
                        width: {
                            xs: 300,
                            md: 500
                        }
                    }}/>
                    {/*<IconButton onClick={fetchData} sx={{*/}
                    {/*    mt: 2, mr: 4, height: 40, width: 40*/}
                    {/*}}>*/}
                    {/*    <Refresh/>*/}
                    {/*</IconButton>*/}
                </Box>

                {loading && <Box sx={{
                    height: '40vh',
                    width: 'vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <CircularProgress/>
                </Box>}

                {!loading && <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Nom</TableCell>
                                <TableCell>Adresse</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                persons.map(({id, name, address}) => (
                                    <TableRow key={id}>
                                        <TableCell>{id}</TableCell>
                                        <TableCell>{name}</TableCell>
                                        <TableCell>{address}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>}
            </Card>
        </Container>
    );
}
