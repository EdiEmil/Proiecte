import axios from "axios";
import { BASE_API_URL } from "../constants/constants";
import { authHeader } from "./BaseService";

const API_URL = BASE_API_URL + '/api/farmacist';

class ProfileFarmacistPage {

    getFarmacistById(id){
        return axios.get(API_URL + '/getFarmacist/' + id, {headers: authHeader()});
    }

    getFarmacieByNumeAndOrasAndStradaAndNumar(numeFarmacie, orasFarmacie, stradaFarmacie, numarFarmacie){
        return axios.get('http://localhost:8080/api/farmacie/getFarmacieByNumeAndOrasAndStradaAndNumar/' + numeFarmacie + '/' + orasFarmacie + '/' + stradaFarmacie + '/' + numarFarmacie, {headers: authHeader()});
    }

    getPrescriereByFarmacieId(farmacieId){
        return axios.get('http://localhost:8080/api/prescriere/getPrescriereByFarmacieId/' + farmacieId, {headers: authHeader()});
    }

    updateFarmacistWithFarmacie(farmacieId, farmacistId){
        return axios.put('http://localhost:8080/api/farmacist/updateFarmacist/' + farmacieId + '/' + farmacistId,{} ,{headers: authHeader()});
    }

    createRaspuns(farmacistId, pacientCnp,raspuns){
        return axios.post('http://localhost:8080/api/raspuns/create/' + farmacistId + '/' + pacientCnp, raspuns, {headers: authHeader()});
    }

    getPrescriereById(id){
        return axios.get('http://localhost:8080/api/prescriere/getprescrierebyid/' + id, {headers: authHeader()});
    }

    getFarmacieById(id){
        return axios.get('http://localhost:8080/api/farmacie/getFarmacieById/' + id, {headers:authHeader()});
    }

}
export default new ProfileFarmacistPage();