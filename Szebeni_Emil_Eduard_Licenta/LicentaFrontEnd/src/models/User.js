export default class User {
    constructor(username, password, firstName, lastName, cnp, createTime, numeDoctorFamilie, prenume_doctor_familie ,role, token, id){
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cnp = cnp;
        this.createTime = createTime;
        this.numeDoctorFamilie = numeDoctorFamilie;
        this.prenume_doctor_familie = prenume_doctor_familie;
        this.role = role;
        this.token =token;
        this.id = id;
    }
}