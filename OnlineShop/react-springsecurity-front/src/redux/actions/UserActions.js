import { CLEAR_CURRENT_USER, SET_CURRENT_USER } from "../Types"

export const setCurrentUser = (user) => { // cand avem un user logat, notificam toate componentele de userul curent, prin obiectul user
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
};

export const clearCurrentUser = () => { // pentru momentul cand un user da logout
    return{
        type: CLEAR_CURRENT_USER
    }
}