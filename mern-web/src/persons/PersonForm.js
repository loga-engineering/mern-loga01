import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {create} from './person.service';
import {Container, TextField, Button, Grid} from "@mui/material";

const initialPerson = {
    name: '',
    address: ''
};

export default function PersonForm(props) {

    const navigate = useNavigate();

    const [person, setPerson] = useState(initialPerson);

    const handleChange = id => e => {
        const {target: {value}} = e;
        setPerson({
            ...person,
            [id]: value,
        });
    }

    const handleCreate = async (e) => {
        e.preventDefault();

        try {
            await create(person);

            navigate('/persons');
        } catch (e) {
            console.log(e);
        }
    }

    const {name, address} = person;

    return (
        <Container>
            <h1>Form</h1>

            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}><TextField fullWidth onChange={handleChange('name')} value={name} label="Nom" variant="outlined"/></Grid>
                    <Grid item xs={12} md={6}><TextField fullWidth onChange={handleChange('address')} value={address} label="Adresse" variant="outlined"/></Grid>
                    <Grid item xs={12} sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Button sx={{
                            width: {
                                xs: 300,
                                md: 500
                            }
                        }} onClick={handleCreate} variant="contained">Creer</Button>
                    </Grid>
                </Grid>
            </form>

        </Container>
    );
}
