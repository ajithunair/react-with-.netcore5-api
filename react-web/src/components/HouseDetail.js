import {useParams} from 'react-router-dom';
import { currencyFormatter } from '../config';
import { useFetchHouse } from '../hooks/HouseHook';
import ApiStatus from './ApiStatus';
import noimage from '../main/No-Image.png'
const HouseDetail = () => {
    const {id} = useParams();
    if (!id) throw Error("House id not found")
    const houseId = parseInt(id);

    const {data, status, isSuccess} = useFetchHouse(houseId);
    if(!isSuccess)
        return <ApiStatus status={status} />
    
    if(!data)
    return <div>No data found</div>

    return (
        <div className='row'>
            <div className='col-3'>
                <div className='row'>
                    <img alt='House' src={data.photo ? data.photo : noimage} />
                </div>
            </div>
            <div className='col-6'>
            <div className='row mt-2'>
                <h5 className='col-12'>{data.country}</h5>
            </div>
            <div className='row'>
                <h3 className='col-12'>{data.address}</h3>
            </div>
            <div className='row'>
                <h2 className='themeFontColor col-12'>
                    {currencyFormatter.format(data.price)}
                </h2>
            </div>
            <div className='row'>
                <div className='col-12 mt-3'>{data.description}</div>
            </div>
            </div>
        </div>
    )
}

export default HouseDetail