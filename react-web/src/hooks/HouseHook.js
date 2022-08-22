import { useEffect, useState } from "react";
import axios from 'axios';

const useFetchHouses = () =>{
    const [houses, setHouses] = useState([]);
    
    const fetchHouses = async () => {
        // const response = await fetch('https://localhost:5000/api/Houses');
        // const data = await response.json();
        // setHouses(data);
        axios.get('https://localhost:5000/api/Houses').then(response => {
            setHouses(response.data);
        });
    };

    useEffect(() => {
        fetchHouses();
    }, [])
    

    return houses;
}

export default useFetchHouses