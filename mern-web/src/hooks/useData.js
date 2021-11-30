import {useEffect, useState} from "react";


export const useData = (finder) => {

    const [query, setQuery] = useState('');

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [query]);

    const fetchData = async () => {
        console.log('Fetch Data: ', {query});
        try {
            const res = await finder(query);
            console.log(res);
            setData(res.data);
        } catch (e) {
            console.log(e);
        }
    }

    return {
        query, setQuery, data
    };
}
