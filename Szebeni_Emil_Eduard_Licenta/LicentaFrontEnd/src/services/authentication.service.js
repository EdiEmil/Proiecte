import { BASE_API_URL } from "../constants/constants";
import axios from "axios";

const BASE_URL = BASE_API_URL + '/api/authentication';

class AuthenticationService {

    loginUser(user){
        return axios.post(BASE_URL + '/sign-in/user', user);
    }

    registerUser(user){
        return axios.post(BASE_URL + '/sign-up/user',user);
    }

    loginDoctor(doctor){
        return axios.post(BASE_URL + '/sign-in/doctor', doctor);
    }

    registerDoctor(doctor){
        return axios.post(BASE_URL + '/sign-up/doctor', doctor);
    }

    loginFarmacist(farmacist){
        return axios.post(BASE_URL + '/sign-in/farmacist', farmacist);
    }

    registerFarmacist(farmacist){
        return axios.post(BASE_URL + '/sign-up/farmacist', farmacist);
    }
}

export default new AuthenticationService();
