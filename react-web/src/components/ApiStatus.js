//import {Alert} from 'react-bootstrap';

//const s= "idle" | "error" | "loading" | "success"
const ApiStatus = (props) => {
    return (
        <div className="alert alert-primary" role="alert">
            {props.status}
        </div>
    )
}

export default ApiStatus