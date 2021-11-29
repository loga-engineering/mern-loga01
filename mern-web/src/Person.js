import React, {useState} from 'react';

function Person() {
    const [person, setPerson] = useState({
        name: '',
        address: ''
    });

    const handleChange = id => e => {
        const {target: {value}} = e;
        setPerson({
            ...person,
            [id]: value,
        });
    }

    const handleCreate = (e) => {
        e.preventDefault();

        console.log(person);
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

            {name} - {address}
        </div>
    );
}

export default Person;
