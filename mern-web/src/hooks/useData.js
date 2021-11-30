import {useEffect, useState} from "react";


export const useData = (finder) => {

    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [query]);

    const fetchData = async () => {
        console.log('Fetch Data: ', {query});
        try {
            setLoading(true);
            const res = await finder(query);
            setLoading(false);
            console.log(res);
            setData(res.data);
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    }

    return {
        query, setQuery, data, fetchData, loading
    };
}
