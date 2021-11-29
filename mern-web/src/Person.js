import React, {useState, useEffect} from 'react';
import axios from 'axios';

const initialPerson = {
    name: '',
    address: ''
};

function Person() {

    const [persons, setPersons] = useState([]);

    const [person, setPerson] = useState(initialPerson);

    useEffect(() => {
        fetchPersons()
    }, []);

    const fetchPersons = async () => {
        console.log('Fetch Persons');
        try {
            const res = await axios.get('http://localhost:8080/persons');
            setPersons(res.data);
        } catch (e) {
            console.log(e);
        }
    }

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
            await axios.post('http://localhost:8080/persons', person);

            setPerson(initialPerson);

            await fetchPersons();

        } catch (e) {
            console.log(e);
        }
    }

    const {name, address} = person;

    return (
        <div className="App">
            <h1>Form</h1>

            <form>
                Nom : <input onChange={handleChange('name')} value={name} type="text"/><br/>
                Adresse : <input onChange={handleChange('address')} value={address} type="text"/><br/>
                <button onClick={handleCreate}>Creer</button>
            </form>

            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Adresse</th>
                </tr>
                </thead>
                <tbody>
                {
                    persons.map(({id, name, address}) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{address}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default Person;
