import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

import PersonForm from './PersonForm';
import PersonList from "./PersonList";


const spanStyle = {
    marginRight: '10px'
};

export default function Person() {


    return (
        <BrowserRouter>
            <div>
                <Link to='/persons/new' style={spanStyle}>Nouveau</Link>
                <Link to='/persons' style={spanStyle}>Liste</Link>
            </div>

            <Routes>
                <Route path='persons'>
                    <Route index element={<PersonList/>}/>
                    <Route path='new' element={<PersonForm/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

