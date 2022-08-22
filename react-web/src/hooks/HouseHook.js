import { useEffect, useState } from "react";

const useFetchHouses = () =>{
    const [houses, setHouses] = useState([]);
    
    const fetchHouses = async () => {
        const response = await fetch('https://localhost:5000/api/Houses');
        const data = await response.json();
        setHouses(data);
    };

    useEffect(() => {
        fetchHouses();
    }, [])
    

    return houses;
}

export default useFetchHouses