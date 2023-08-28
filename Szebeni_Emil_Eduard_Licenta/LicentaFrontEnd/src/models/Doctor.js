export default class Doctor {
    constructor(username, password, firstName, lastName, institutie, cnp, pozaParafa, role, token, id){
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.institutie = institutie;
        this.cnp = cnp;
        this.pozaParafa = pozaParafa;
        this.role = role;
        this.token = token;
        this.id = id;
    }
}