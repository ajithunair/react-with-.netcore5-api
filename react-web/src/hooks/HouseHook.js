import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import config from "../config";

const useFetchHouses = () =>{
    return useQuery("houses", async () => {
        const response = await axios.get(`${config.baseApiUrl}/api/houses`);
        //console.log(response.data);
        return response.data;
     }
 );
}

const useFetchHouse = (id) => {
    return useQuery(["houses",id], async () => {
        const response = await axios.get(`${config.baseApiUrl}/api/houses/${id}`);
        //console.log(response.data);
        return response.data;
    });
}

const useAddHouse = () => {
    const queryClient = useQueryClient();
    const nav = useNavigate();
    return useMutation((h) => {
        axios.post(`${config.baseApiUrl}/api/houses`,h)
    },
    {
        onSuccess: () => {
            queryClient.invalidateQueries('houses');
            nav('/');
        }
    })
}

const useUpdateHouse = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();
    return useMutation((h) => {
        axios.put(`${config.baseApiUrl}/api/houses`, h)
    },
    {
        onSuccess: (_,r) => {
            queryClient.invalidateQueries(["houses",r.id]);
            nav(`/houses/${r.id}`);
        }
    })
}

const useDeleteHouse = () => {
    const queryClient = useQueryClient();
    const nav = useNavigate();
    return useMutation((h) => {
        axios.delete(`${config.baseApiUrl}/api/houses/${h.id}`)
        },
    {
        onSuccess: () => {
            queryClient.invalidateQueries('houses');
            nav('/');
        }
    })
}

export default useFetchHouses
export {useFetchHouse, useAddHouse, useUpdateHouse, useDeleteHouse}