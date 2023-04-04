import { useContext } from "react";
import { ChangeUserContext } from "../App";

function ChangeUsername() {
    const setUsername = useContext(ChangeUserContext);

    return (
        <input type="text" 
        onChange={ (event) => { setUsername(event.target.value) } } />
    )
}

export default ChangeUsername;