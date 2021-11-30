import './App.css';
// import Person from "./persons/Person";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    List,
    Box,
    IconButton,
    AppBar,
    Toolbar,
    Button,
    Drawer,
    Avatar
} from '@mui/material';
import {Menu, Person, PersonAdd, Factory} from '@mui/icons-material';
import {useState} from "react";
import PersonList from "./persons/PersonList";
import PersonForm from "./persons/PersonForm";

const App = () => {

    const [open, setOpen] = useState(false);

    return (
        <BrowserRouter>
            <AppBar>
                <Toolbar>
                    <IconButton onClick={() => setOpen(true)}>
                        <Menu sx={{color: 'white'}}/>
                    </IconButton>
                    <Button sx={{color: 'white'}} component={Link} to='/persons/new'>Nouveau</Button>
                    <Button sx={{color: 'white'}} component={Link} to='/persons'>Liste</Button>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={{width: 300}} onClick={() => setOpen(false)}>
                    <Box sx={{
                        width: '100%', height: 200,
                        display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Avatar sx={{height: 150, width: 150}}>
                            <Factory sx={{fontSize: 100}}/>
                        </Avatar>
                    </Box>
                    <List>
                        <ListItem component={Link} to='/persons'>
                            <ListItemIcon>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText primary='Liste de personne '/>
                        </ListItem>
                        <ListItem component={Link} to='/persons/new'>
                            <ListItemIcon>
                                <PersonAdd/>
                            </ListItemIcon>
                            <ListItemText primary='Nouvelle de personne '/>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

            <Routes>
                <Route path='persons'>
                    <Route index element={<PersonList/>}/>
                    <Route path='new' element={<PersonForm/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
