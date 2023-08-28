import axios from 'axios';
import { BASE_API_URL } from '../constants/constants';
import { authHeader } from './BaseService';

const API_URL = BASE_API_URL + '/api/admin';

class AdminService {

    // approveDoctor(doctor) {
    //     return axios.put(API_URL + '/approveDoctor/' + doctor.id, {headers: authHeader()});
    // }
    getAllUnapprovedDoctors(){
        return axios.get(API_URL + '/getAllUnapprovedDoctors',{headers: authHeader()});
    }

    approveDoctor(doctor) {
        return axios.put('http://localhost:8080/api/admin/approveDoctor/' + doctor.id, {}, {headers: authHeader()});
    }

    getAllUnapprovedFarmacisti(){
        return axios.get(API_URL + '/getAllUnapprovedFarmacisti',{headers: authHeader()});
    }

    approveFarmacist(farmacist){
        return axios.put(API_URL + '/approveFarmacist/' + farmacist.id, {}, {headers: authHeader()});
    }

    changeRole(doctorId){
        return axios.put(API_URL + '/change/' + doctorId, {}, {headers:authHeader()});
    }

    deleteDoctor(doctorId){
        return axios.delete('http://localhost:8080/api/doctor/deleteDoctor/' + doctorId, {headers: authHeader()});
    }

    deleteFarmacist(farmacistId){
        return axios.delete('http://localhost:8080/api/farmacist/deleteFarmacist/' + farmacistId, {headers: authHeader()});
    }



}

export default new AdminService();