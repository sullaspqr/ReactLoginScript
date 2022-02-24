import { useHistory } from "react-router-dom";
import { logout } from "./AuthService";

export function Kijelentkezes() {
    const history = useHistory();

    return (
        <button
        className="btn btn-danger m-3 float-right"
        onClick={() => {
            logout().finally(() => {
                history.push("/");
            });
        }}
        >Kijelentkezés</button>
    );
}
export default Kijelentkezes;