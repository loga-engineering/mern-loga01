import React, {useState} from 'react';

export default function Address() {
    const [address, setAddress] = useState({
        region: '',
        cercle: '',
        commune: '',
        localite: '',
    });

    const handleChange = id => e => {
        const {target: {value}} = e;
        setAddress({
            ...address,
            [id]: value,
        });
    }

    const handleCreate = (e) => {
        e.preventDefault();

        console.log(address);
    }

    const {region, cercle, commune, localite} = address;

    return (
        <div className="App">
            <h1>Form Address</h1>

            <form>
                Region : <input onChange={handleChange('region')} value={region} type="text"/><br/>
                Cercle : <input onChange={handleChange('cercle')} value={cercle} type="text"/><br/>
                Commune : <input onChange={handleChange('commune')} value={commune} type="text"/><br/>
                Localite : <input onChange={handleChange('localite')} value={localite} type="text"/><br/>
                <button onClick={handleCreate}>Creer</button>
            </form>

            {region} - {cercle}
        </div>
    );
}
