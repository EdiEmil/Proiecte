import axios from "axios";
import { authHeader } from "./BaseService";

class RaspunsService{

    createRaspuns(farmacistId, pacientCnp, raspuns){
       return axios.post('http://localhost:8080/api/raspuns/create/' + farmacistId + '/' + pacientCnp, raspuns, {headers: authHeader()});
    }
}
export default new RaspunsService();