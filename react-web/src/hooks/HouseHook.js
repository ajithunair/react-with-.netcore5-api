import { useEffect, useState } from "react";
import axios from 'axios';
import config from "../config";

const useFetchHouses = () =>{
    const [houses, setHouses] = useState([]);
    
    const fetchHouses = async () => {
        // const response = await fetch('https://localhost:5000/api/Houses');
        // const data = await response.json();
        // setHouses(data);
        axios.get(`${config.baseApiUrl}/api/houses`).then(response => {
            setHouses(response.data);
        });
    };

    useEffect(() => {
        fetchHouses();
    }, [])
    

    return houses;
}

export default useFetchHouses