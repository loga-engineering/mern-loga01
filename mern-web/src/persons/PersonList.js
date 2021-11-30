import React, {useEffect, useState} from 'react';

import {Container, Card, Table, TableBody, TableHead, TableRow, TableCell, TableContainer} from '@mui/material';

import {search} from './person.service';
import TextField from "@mui/material/TextField";
import {usePersons} from "./person.hooks";

export default function PersonList() {

    const {query, setQuery, data: persons} = usePersons();

    return (
        <Container>
            <Card sx={{
                mt: 10
            }}>
                <TextField value={query} onChange={(e) => setQuery(e.target.value)} placeholder='recherche' sx={{
                    m: 2,
                    width: {
                        xs: 300,
                        md: 500
                    }
                }}/>
                <TableContainer>
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
                </TableContainer>
            </Card>
        </Container>
    );
}
