import axios from "axios";
import { BASE_API_URL } from "../constants/constants";
import { authHeader } from "./BaseService";

const API_URL = BASE_API_URL + '/api/doctor';

class DoctorService {

    getAllDoctors() {
        return axios.get(API_URL, {headers: authHeader()});
    }

    approveDoctor(doctor) {
        return axios.put('http://localhost:8080/api/admin/approveDoctor/' + doctor.id, {}, {headers: authHeader()});
    }

    getDoctorById(id) {
        return axios.get(API_URL + '/getDoctorSpital/' +id, {headers: authHeader()});
    }

    getUsersByNumeDoctorFamilie(doctor){
        return axios.get(API_URL + '/getUserByNumeDoctorFamilie/' + doctor.lastName + '/' + doctor.firstName, {headers: authHeader()});
    }

    createTrimitere(trimitere){
        return axios.post('http://localhost:8080/api/trimitere', trimitere, {headers: authHeader()});
    }

    getProgramareByNumeDoctorAndPrenumeDoctorAndSectie(numeDoctor, prenumeDoctor, sectie){
        return axios.get('http://localhost:8080/api/programare/getprogramare/' + numeDoctor + '/' + prenumeDoctor + '/' + sectie, {headers: authHeader()});
    }

    getProgramareByDoctorNou(numeDoctor, prenumeDoctor, spital){
        return axios.get('http://localhost:8080/api/programare/getProgramareByDoctorNou/' + numeDoctor + '/' + prenumeDoctor + '/' + spital, {headers:authHeader()});
    }

    createPrescriere(prescriere){
        return axios.post('http://localhost:8080/api/prescriere', prescriere, {headers: authHeader()});
    }

    getProgramareByDoctor(numeDoctor,prenumeDoctor,sectieDoctor){
        return axios.get('http://localhost:8080/api/programare/getProgramareByDoctor/' + numeDoctor + '/' + prenumeDoctor + '/' + sectieDoctor, {headers: authHeader()});
    }

    getTrimitereFromProgramare(trimitereId){
        return axios.get('http://localhost:8080/api/programare/getTrimitereByTrimitereId/' + trimitereId, {headers: authHeader()});
    }

    getCombinations(){
        return axios.get('http://localhost:8080/api/generate/getGenerate', {headers: authHeader()});
    }

    getNumbers(){
        return axios.get('http://localhost:8080/api/generate/getGenerateNumbers', {headers: authHeader()});
    }

}

export default new DoctorService();