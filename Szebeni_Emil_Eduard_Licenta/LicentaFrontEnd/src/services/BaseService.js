import axios from "axios";
import store from "../redux-store";
import { clearCurrentUser } from "../redux-store/actions/user";

export const authHeader = () => {

    const currentUser = store.getState().user;

    return {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + currentUser?.token
    }
}

// cazul in care token-ul JWT expira
export function handleResponseWithLoginCheck() {
    axios.interceptors.request.use(response => response,
        error => {
            const currentUser = store.getState().user;
            const isLoggedIn = currentUser?.token;
            const status = error?.response?.status;

            if(isLoggedIn && [401,403].includes(status)) {
                store.dispatch(clearCurrentUser());
            }

            return Promise.reject(error);
        })
}