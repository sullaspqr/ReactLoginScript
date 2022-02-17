import axios from "axios";

let accessToken = "";

export function login(email, password) {
    return axios
    .post("https://kodbazis.hu/api/login-user", { email, password }, { withCredentials: true})
    .then((res) => {
        accessToken = res.data.accessToken;
    });
}
export function logout() {
    return axios.post("https://kodbazis.hu/api/logout-user", {}, { withCredentials: true})
    .then((res) => {
        accessToken = "";
    });
}
export const fetchHitelesitessel = axios.create();
fetchHitelesitessel.interceptors.request.use(
    (config) => {

    },
    (error) => {

    }
);
fetchHitelesitessel.interceptors.response.use(
    (response) => {

    },
    (error) => {

    }
);
