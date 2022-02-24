import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchHitelesitessel } from "./AuthService";
import { Kijelentkezes } from "./Kijelentkezes";

export function SzallasSingle({id}) {
    const [szallas, setSzallas] = useState({});
    const [isPending, setPending] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setPending(true);
        fetchHitelesitessel
        .get("https://kodbazis.hu/api/szallasok/" + id)
        .then((res) => res.data)
        .then((tartalom) => {
            setSzallas(tartalom);
            setPending(false);
        })
        .catch(() => {
            setPending(false);
            history.push("/");
        });
    }, []);
    
    if (isPending || !szallas.id) {
        return (
            <div className="center-item">
                <div className="spinner-border text-danger"></div>
            </div>
        );
    }
    return (
        <div className="card w-100 m-auto p-3">
            <h1>{szallas.name}</h1>
            <h3>{szallas.host_name}</h3>
            <h3>
                {szallas.neighbourhood} {szallas.neighbourhood_group}
            </h3>
            <h3>{szallas.minimum_nights}</h3>
            <Kijelentkezes/>
            </div>
    );
}