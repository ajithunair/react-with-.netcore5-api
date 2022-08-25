import { useState } from "react"

const HouseForm = ({house, submitted}) => {
    const [houseState, setHouseState] = useState({...house});

    const onSubmit = async (e) => {
        e.preventDefault();
        submitted(houseState);
    }
    return (
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type='text'
                    className="form-control"
                    placeholder="Address"
                    value={houseState.address}
                    onChange={(e) => setHouseState({...houseState, address: e.target.value})
                } />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="country">Country</label>
                <input type='text'
                    className="form-control"
                    placeholder="Country"
                    value={houseState.country}
                    onChange={(e) => setHouseState({...houseState, country: e.target.value})
                } />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="description">Description</label>
                <input type='text'
                    className="form-control"
                    placeholder="Description"
                    value={houseState.description}
                    onChange={(e) => setHouseState({...houseState, description: e.target.value})
                } />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="price">Price</label>
                <input type='number'
                    className="form-control"
                    placeholder="Price"
                    value={houseState.price}
                    onChange={(e) => setHouseState({...houseState, price: parseInt(e.target.value)})
                } />
            </div>
            <button
                className="btn btn-primary mt-2"
                disabled={!houseState.address}
                onClick={onSubmit} >
                    Submit
            </button>
        </form>
    )
}

export default HouseForm