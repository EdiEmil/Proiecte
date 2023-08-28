import axios from 'axios';
import { BASE_API_URL } from '../constants/constants';
import { authHeader } from './BaseService';

const API_URL = BASE_API_URL + '/api/user';

class UserService {

    getUserById(id){
        return axios.get(API_URL + '/getuser/' + id, {headers: authHeader()});
    }

    getDoctorByLastName(doctor){
        return axios.get(API_URL + '/getdoctors/' + doctor.lastName, {headers: authHeader()});
    }

    updateDoctorForUser(user,numeDoctorFamilie, prenumeDoctorFamilie){
        return axios.put(API_URL + '/updateDoctorForUser/' + numeDoctorFamilie + '/' + prenumeDoctorFamilie + '/'+ user.id, {}, {headers: authHeader()});
    }

    getTrimitereByUserName(userName){
        return axios.get('http://localhost:8080/api/trimitere/viewbyname/' + userName, {headers: authHeader()});
    }

    getTrimitereById(id){
        return axios.get('http://localhost:8080/api/trimitere/viewbyid/' + id, {headers: authHeader()});
    }

    createProgramare(userId,trimitereId,programare){
        
        return axios.post('http://localhost:8080/api/programare/create/' 
            + userId 
            + '/' 
            + trimitereId, 
            programare, 
            {headers: authHeader()}
            );
    }

    getTrimitereByCnp(cnp){
        return axios.get('http://localhost:8080/api/trimitere/viewbycnp/' + cnp, {headers: authHeader()});
    }

    getProgramareByUserId(userId){
        return axios.get('http://localhost:8080/api/programare/getprogramare/' + userId, {headers: authHeader()});
    }

    getPrescriereByPacientCnp(cnp){
        return axios.get('http://localhost:8080/api/prescriere/getprescriere/' + cnp, {headers: authHeader()});
    }

    getPrescriereById(id){
        return axios.get('http://localhost:8080/api/prescriere/getprescrierebyid/' + id, {headers: authHeader()});
    }

    getFarmacieByNume(numeFarmacie){
        return axios.get('http://localhost:8080/api/farmacie/getFarmacieByNume/' + numeFarmacie, {headers: authHeader()});
    }

    getFarmacieByOras(orasFarmacie){
        return axios.get('http://localhost:8080/api/farmacie/getFarmacieByOras/' + orasFarmacie, {headers: authHeader()});
    }

    getFarmacieByNumeAndOras(numeFarmacie, orasFarmacie){
        return axios.get('http://localhost:8080/api/farmacie/getFarmacieByNumeAndOras/' + numeFarmacie + '/' + orasFarmacie, {headers: authHeader()});
    }

    getFarmacieByNumeAndStrada(numeFarmacie, stradaFarmacie){
        return axios.get('http://localhost:8080/api/farmacie/getFarmacieByNumeAndStrada/' + numeFarmacie + '/' + stradaFarmacie, {headers: authHeader()});
    }

    getFarmacieByOrasAndStrada(orasFarmacie, stradaFarmacie){
        return axios.get('http://localhost:8080/api/farmacie/getFarmacieByOrasAndStrada/' + orasFarmacie + '/' + stradaFarmacie, {headers: authHeader()});
    }

    getFarmacieByNumeAndOrasAndStrada(numeFarmacie, orasFarmacie, stradaFarmacie){
        return axios.get('http://localhost:8080/api/farmacie/getFarmacieByNumeAndOrasAndStrada/' + numeFarmacie + '/' + orasFarmacie + '/' + stradaFarmacie, {headers: authHeader()});
    }

    getFarmacieByNumeAndOrasAndStradaAndNumar(numeFarmacie,orasFarmacie,stradaFarmacie,numarFarmacie){
        return axios.get('http://localhost:8080/api/farmacie/getFarmacieByNumeAndOrasAndStradaAndNumar/' + numeFarmacie + '/' + orasFarmacie + '/' + stradaFarmacie + '/' + numarFarmacie, {headers:authHeader()});
    }

    getAllFarmacii(){
        return axios.get('http://localhost:8080/api/farmacie/getAllFarmacii/', {headers: authHeader()});
    }

    getFarmacieById(id){
        return axios.get('http://localhost:8080/api/farmacie/getFarmacieById/' + id, {headers: authHeader()});
    }

    updatePrescriereToAddFarmacie(prescriereId, farmacieId){
        return axios.put('http://localhost:8080/api/prescriere/updatePrescriere/' + prescriereId + '/' + farmacieId, {} ,{headers: authHeader()});
    }

    getProgramareByPacientId(pacientId){
        return axios.get('http://localhost:8080/api/programare/getProgramareByPacientId/' + pacientId, {headers: authHeader()});
    }

    getRaspunsByPacientCnp(pacientCnp){
        return axios.get('http://localhost:8080/api/user/getRaspuns/' + pacientCnp, {headers:authHeader()});
    }

    getRaspunsById(id){
        return axios.get('http://localhost:8080/api/raspuns/getRaspuns/' + id, {headers: authHeader()});
    }

    deleteRaspuns(id){
        return axios.delete('http://localhost:8080/api/raspuns/deleteRaspuns/' + id, {headers:authHeader()});
    }
}
export default new UserService();