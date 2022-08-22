import useFetchHouses from "../hooks/HouseHook";
import { currencyFormatter } from "../config";

const HouseList = () => {
    const houses = useFetchHouses();

    return (
        <div>
            <div className="row mb-2">
                <h3 className="themeFontColor text-center">
                    Houses currently on the market
                </h3>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        houses && houses.map(h => (
                            <tr key={h.id}>
                                <td>{h.address}</td>
                                <td>{h.country}</td>
                                <td>{currencyFormatter.format(h.price)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
    
}

export default HouseList