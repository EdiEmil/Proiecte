import { CLEAR_CURRENT_DOCTOR, CLEAR_CURRENT_FARMACIST, CLEAR_CURRENT_USER,SET_CURRENT_DOCTOR,SET_CURRENT_FARMACIST,SET_CURRENT_USER } from "../type";

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user,
    };
};

export const clearCurrentUser = () => {
    return {
        type: CLEAR_CURRENT_USER,
    };
};

export const setCurrentDoctor = (doctor) => {
    return {
        type : SET_CURRENT_DOCTOR,
        payload: doctor,
    };
};

export const clearCurrentDoctor = () => {
    return {
        type: CLEAR_CURRENT_DOCTOR,
    }
};

export const setCurrentFarmacist = (farmacist) => {
    return {
        type: SET_CURRENT_FARMACIST,
        payload: farmacist,
    }
};

export const clearCurrentFarmacist = () => {
    return {
        type: CLEAR_CURRENT_FARMACIST,
    }
}
