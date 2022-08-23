import axios from 'axios';
import { useQuery } from 'react-query';
import config from "../config";

const useFetchHouses = () =>{
    return useQuery("houses", async () => {
        const response = await axios.get(`${config.baseApiUrl}/api/houses`);
        console.log(response.data);
        return response.data;
     }
 );
}

const useFetchHouse = (id) => {
    return useQuery(["houses",id], async () => {
        const response = await axios.get(`${config.baseApiUrl}/api/houses/${id}`);
        console.log(response.data);
        return response.data;
    });
}

export default useFetchHouses
export {useFetchHouse}