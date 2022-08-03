import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const AbortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: AbortCont.signal})
                .then(res => {
                    if(! res.ok) {
                        throw Error("Can Not Fetch Data From DataBase");
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if(err.name === 'AbortError') {
                        console.log("Aborting Fetch From DataBase");
                    }
                    else {
                        setIsPending(false);
                        setError(err.massage);
                    }
                })
        }, 500)
    }, [url])
    return {data, isPending, error}
}
 
export default useFetch;