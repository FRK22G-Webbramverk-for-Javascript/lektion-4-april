import { useContext } from "react";
import { UserContext } from "../App";

function DisplayUsername() {
    const username = useContext(UserContext);

    return (
        <h2>{ username }</h2>
    )
}

export default DisplayUsername;