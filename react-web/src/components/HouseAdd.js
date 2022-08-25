import { useAddHouse } from "../hooks/HouseHook"
import HouseForm from "./HouseForm";

const HouseAdd = () => {
    const addHouseMutation = useAddHouse();
    const house = {
        address: '',
        country: '',
        description: '',
        price: 0,
        id: 0,
        photo: ''
    };

    return (
        <HouseForm 
            house={house}
            submitted = {(h) => addHouseMutation.mutate(h)}
        />
    )
}

export default HouseAdd