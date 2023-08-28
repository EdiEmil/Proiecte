import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import Trimitere from '../models/Trimitere';
import DoctorService from '../services/DoctorService';
import { Modal } from "react-bootstrap";
import { useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FarmacistService from "../services/FarmacistService";

const TrimitereSave = forwardRef((props, ref) => {

    // trebuie sa verific cum transmit aici, care este fisrtName si care este lastName
    const { userFirstName } = props;
    const { userLastName } = props;
    const { userCnp } = props;
    const { codParafa } = props;
    console.log("Aici avem numele din Modal: " + userFirstName);

    useImperativeHandle(ref, () => ({
         showTrimitereModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);
         }
    }));

    const [trimitere, setTrimitere] = useState(new Trimitere('', ''));

    // useEffect(() => {
    //     setTrimitere(props.trimitere);
    // }, [props.trimitere]);

    
    const [serie, setSerie] = useState('');
    const [numar, setNumar] = useState();
    const [catreSpecialitateaClinica, setCatreSpecialitateaClinica] = useState('');
    const [cui, setCui] = useState('');
    const [sediu, setSediu] = useState('');
    const [judetul, setJudetul] = useState('');
    const [casaDeAsigurari, setCasaDeAsigurari] = useState('');
    const [nrContract, setNrContract] = useState();
    const [mf, setMf] = useState(false);
    const [ambSpec, setAmbSpec] = useState(false);
    const [unitateSanitaraPaturi, setUnitateSanitaraPaturi] = useState(false);
    const [altele, setAltele] = useState(false);
    const [urgenta, setUrgenta] = useState(false);
    const [curente, setCurente] = useState(false);
    const [asiguratLaCas, setAsiguratLaCas] = useState('');
    const [nume, setNume] = useState('');
    const [prenume, setPrenume] = useState('');
    const [adresa, setAdresa] = useState('');
    const [cnp, setCnp] = useState('');
    const [cetatenia, setCetatenia] = useState('');
    const [pachetDeBaza, setPachetDeBaza] = useState(false);
    const [pachetMinimal, setPachetMinimal] = useState(false);
    const [salariat, setSalariat] = useState(false);
    const [coasigurat, setCoasigurat] = useState(false);
    const [liberProfesionist, setLiberProfesionist] = useState(false);
    const [copil, setCopil] = useState(false);
    const [elevUcenicStudent, setElevUcenicStudent] = useState(false);
    const [gravida, setGravida] = useState(false);
    const [pensionar, setPensionar] = useState(false);
    const [alteCategorii, setAlteCategorii] = useState(false);
    const [veteran, setVeteran] = useState(false);
    const [revolutionar, setRevolutionar] = useState(false);
    const [handicap, setHandicap] = useState(false);
    const [pns, setPns] = useState(false);
    const [ajutorSocial, setAjutorSocial] = useState(false);
    const [somaj, setSomaj] = useState(false);
    const [persoanlContractual, setPersonalContractual] = useState(false);
    const [cardEuropean, setCardEuropean] = useState(false);
    const [acorduriInternationale, setAcorduriInternationale] = useState(false);
    const [diagnosticPrezumtiv, setDiagnosticPrezumtiv] = useState('');
    const [codDiagnosticPrezumtiv, setCodDiagnosticPrezumtiv] = useState('');
    const [p, setP] = useState(false);
    const [aS, setAS] = useState(false);
    const [c, setC] = useState(false);
    const [m, setM] = useState(false);
    const [alteDiagnosticeCunoscute, setAlteDiagnosticeCunoscute] = useState('');
    const [codDiagnostic, setCodDiagnostic] = useState('');
    const [motivulTrimiteriiCatreAlteSpecialitati, setMotivulTrimiteriiCatreAlteSpecialitati] = useState('');
    const [investigatiiSiTratamenteEfectuate, setInvestigatiiSiTratamenteEfectuate] = useState('');
    const [nrDeConsultatiiAcordate, setNrDeConsultatiiAcordate] = useState();
    const [dataTrimiterii, setDataTrimiterii] = useState();
    // const [codParafa, setCodParafa] = useState('');
    const [seInterneazaInUnitateaSanitaraCuPatur, setSeInterneazaInUnitateaSanitaraCuPatur] = useState('');
    const [sectia, setSectia] = useState('');
    const [motivulPtCareNuAFostNecesaraInternareaLaDomiciliu, setMotivulPtCareNuAFostNecesaraInternareaLaDomiciliu] = useState('');
    const [dataPrezentarii, setDataPrezentarii] = useState();
    const [parafaMedicServiciiMedicale, setParafaMedicServiciiMedicale] = useState('');
    
    // lipsesc numeDoctorDetTrimis, prenumeDoctorDeTrimis, institutieDoctorDeTrimis, programare
    //const []

    
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

     if(mf === "mf"){
        setMf(true);
        setAmbSpec(false);
        setAltele(false);
     }else if(ambSpec === "ambSpec"){
        setMf(false);
        setAmbSpec(true);
        setAltele(false);
     }else if(altele === "altele"){
        setMf(false);
        setAmbSpec(false);
        setAltele(true);
     }

     if(urgenta === "urgenta"){
        setUrgenta(true);
        setCurente(false);
     }else if(curente === "curente"){
        setUrgenta(false);
        setCurente(true);
     }

     if(salariat === "salariat"){
        setSalariat(true);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(coasigurat === "coasigurat"){
        setSalariat(false);
        setCoasigurat(true);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(liberProfesionist === "liberProfesionist"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(true);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(copil === "copil"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(true);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(elevUcenicStudent === "elevUcenicStudent"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(true);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(gravida === "gravida"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(true);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(pensionar === "pensionar"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(true);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(alteCategorii === "alteCategorii"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(true);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(veteran === "veteran"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(true);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(revolutionar === "revolutionar"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(true);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(handicap === "handicap"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(true);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(pns === "pns"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(true);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(ajutorSocial === "ajutorSocial"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(true);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(somaj === "somaj"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(true);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(persoanlContractual === "personalContractual"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(true);
        setCardEuropean(false);
        setAcorduriInternationale(false);
     }else if(cardEuropean === "cardEuropean"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(true);
        setAcorduriInternationale(false);
     }else if(acorduriInternationale === "acorduriInternationale"){
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setAlteCategorii(false);
        setVeteran(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersonalContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(true);
     }

     if(p === "p"){
        setP(true);
        setAS(false);
        setC(false);
        setM(false);
     }else if(aS === "aS"){
        setP(false);
        setAS(true);
        setC(false);
        setM(false);
     }else if(c === "c"){
        setP(false);
        setAS(false);
        setC(true);
        setM(false);
     }else if(m === "m"){
        setP(false);
        setAS(false);
        setC(false);
        setM(true);
     }

     if(pachetDeBaza === "pachetDeBaza"){
        setPachetDeBaza(true);
        setPachetMinimal(false);
     }else if(pachetMinimal === "pachetMinimal"){
        setPachetDeBaza(false);
        setPachetMinimal(true);
     }
     
    
    useEffect(() => {
        
        setTrimitere(new Trimitere(serie,numar,catreSpecialitateaClinica,cui,sediu,judetul,casaDeAsigurari,nrContract,mf,ambSpec,unitateSanitaraPaturi,altele,urgenta,curente,asiguratLaCas,userLastName,userFirstName, adresa, userCnp, cetatenia, pachetDeBaza,pachetMinimal,salariat,coasigurat,liberProfesionist,copil,elevUcenicStudent,gravida,pensionar,alteCategorii,veteran,revolutionar,handicap,pns,ajutorSocial,somaj,persoanlContractual,cardEuropean,acorduriInternationale,diagnosticPrezumtiv,codDiagnosticPrezumtiv,p,aS,c,m,alteDiagnosticeCunoscute,codDiagnostic,motivulTrimiteriiCatreAlteSpecialitati,investigatiiSiTratamenteEfectuate,nrDeConsultatiiAcordate,dataTrimiterii,codParafa,seInterneazaInUnitateaSanitaraCuPatur,sectia,motivulPtCareNuAFostNecesaraInternareaLaDomiciliu,dataPrezentarii,parafaMedicServiciiMedicale));
    },[serie,numar,catreSpecialitateaClinica,cui,sediu,judetul,casaDeAsigurari,nrContract,mf,ambSpec,unitateSanitaraPaturi,altele,urgenta,curente,asiguratLaCas ,userFirstName, userLastName, adresa, userCnp, cetatenia,pachetDeBaza,pachetMinimal,salariat,coasigurat,liberProfesionist,copil,elevUcenicStudent,gravida,pensionar,alteCategorii,veteran,revolutionar,handicap,pns,ajutorSocial,somaj,persoanlContractual,cardEuropean,acorduriInternationale,diagnosticPrezumtiv,codDiagnosticPrezumtiv,p,aS,c,m,alteDiagnosticeCunoscute,codDiagnostic,motivulTrimiteriiCatreAlteSpecialitati,investigatiiSiTratamenteEfectuate,nrDeConsultatiiAcordate,dataTrimiterii,codParafa,seInterneazaInUnitateaSanitaraCuPatur,sectia,motivulPtCareNuAFostNecesaraInternareaLaDomiciliu,dataPrezentarii,parafaMedicServiciiMedicale]);

    const saveTrimitere = (e) => {
        e.preventDefault();

        setSubmitted(true);

        DoctorService.createTrimitere(trimitere).then(response => {
            props.onSaved(response.data);
            setShow(false);
            setSubmitted(false);
            setSuccessMessage('Înregistrare realizată cu succes');
        }).catch(err => {
            setErrorMessage("Eroare pentru creare Trimitere");
            console.log(err);
        });
    };

    const getCombinations = () => {
        DoctorService.getCombinations().then((response) => {
            setSerie(response.data);
        })

        DoctorService.getNumbers().then((response) => {
            setNumar(response.data);
        })
    }

    const handleCloseModal =() => {
        setShow(false);
        setSuccessMessage('');
        setErrorMessage('');
    }

    // const handleChange = (e) => {
    //     const {name, value} = e.target;

    //     setTrimitere((prevState => {
    //         return {
    //             ...prevState,
    //             [name]: value
    //         };
    //     }));
    // };

    return (
        <Modal show={show}>
            <form onSubmit={(e) => saveTrimitere(e)}
            noValidate
            className={submitted ? 'was-validated' : ''}>

                <div className="modal-header">
                    <h5 className="modal-title">Trimitere</h5>
                    <button type="button" className="btn-close" onClick={() => handleCloseModal()}></button>
                </div>

                <div className="modal-body">
                    {successMessage &&
                    <div className="alert alert-success">{successMessage}</div>
                    }
                    {errorMessage &&
                    <div className="alert alert-danger">
                        {errorMessage}
                    </div>
                    }

                        {/* aici unde am value trebuie sa fac ca la regisrter unde nu folosim value si sa setes setSerie cu valoarea primita din props  */}
                    <div className="wrapper-sex">
                        <div className="form-group">
                                    <label htmlFor="serie">Serie: </label>
                                    <input
                                    type="text"
                                    name="serie"
                                    autoComplete="on"
                                    placeholder="serie"
                                    className="form-control"
                                    // defaultValue={userFirstName}
                                    value={serie}
                                    onChange={(e) => setSerie(e.target.value)}
                                    required
                                    />
                            <div className="invalid-feedback">
                                Serie is required.
                            </div>
                        </div>

                        <div className="form-group">
                        <label htmlFor="numar">Numar: </label>
                        <input
                            type="number"
                            min="1"
                            step="any"
                            name="numar"
                            placeholder="numar"
                            className="form-control"
                            value={trimitere.numar}
                            onChange={(e) => setNumar(e.target.value)}
                            required
                        />
                        <div className="invalid-feedback">
                           Numar is required and should be greater than 0.
                        </div>
                    </div>
                    <button type="button" className="btn btn-secondary" style={{maxWidth: '200px'}} onClick={() => getCombinations()}>Generează seria și numărul</button>

                    </div>
                    
                    <div className="wrapper-sex">
                        <div className="form-group">
                            <label htmlFor="catreSpecialitateaClinica">1. Către Specialitatea Clinică: </label>
                            <input
                                type="text"
                                name="catreSpecialitateaClinica"
                                //autoComplete="on"
                                placeholder="Către Specialitatea Clinică"
                                className="form-control"
                                // defaultValue={userFirstName}
                                //value={userFirstName}
                                onChange={(e) => setCatreSpecialitateaClinica(e.target.value)}
                                //required
                            />
                        </div>

                    </div>
                    

                    <hr className="horizontal-line" />

                    <div><h6>2. Unitate Medicală</h6></div>

                    <div style={{flex: 1}}>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label htmlFor="cui">CUI: </label>
                                    <input
                                        type="text"
                                        name="cui"
                                        //autoComplete="on"
                                        placeholder="CUI"
                                        className="form-control"
                                        // defaultValue={userFirstName}
                                        //value={userFirstName}
                                        onChange={(e) => setCui(e.target.value)}
                                        //required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="sediiu">Sediu: </label>
                                    <input
                                        type="text"
                                        name="sediu"
                                        //autoComplete="on"
                                        placeholder="Sediu"
                                        className="form-control"
                                        // defaultValue={userFirstName}
                                        //value={userFirstName}
                                        onChange={(e) => setSediu(e.target.value)}
                                        //required
                                    />
                                </div>

                                
                                <div className="form-group">
                                    <label htmlFor="judetul">Județul: </label>
                                    <input
                                        type="text"
                                        name="judetul"
                                        //autoComplete="on"
                                        placeholder="Județul"
                                        className="form-control"
                                        // defaultValue={userFirstName}
                                        //value={userFirstName}
                                        onChange={(e) => setJudetul(e.target.value)}
                                        //required
                                    />
                                </div>

                                

                                
                            </div>

                            <div className="col-sm-4">
                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiune1"
                                        id="mf"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="mf"
                                        onChange={(e) => setMf(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="mf">MF</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    
                                    <input
                                        type="radio"
                                        name="sectiune1"
                                        id="ambSpec"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="ambSpec"
                                        onChange={(e) => setAmbSpec(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="ambSpec">Amb Spec</label>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                <div className="form-check">
                                    
                                    <input
                                        type="radio"
                                        name="sectiune1"
                                        id="altele"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="altele"
                                        onChange={(e) => setAltele(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="altele">Altele: </label>
                                    </div>
                                </div>
                                <div className="form-group" style={{marginTop:'50px'}}>
                                    <label htmlFor="casaDeAsigurari">Casa de Asigurări: </label>
                                    <input
                                        type="text"
                                        name="casaDeAsigurari"
                                        //autoComplete="on"
                                        placeholder="Județul"
                                        className="form-control"
                                        // defaultValue={userFirstName}
                                        //value={userFirstName}
                                        onChange={(e) => setCasaDeAsigurari(e.target.value)}
                                        //required
                                    />
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div><h6>Nivel de prioritate</h6></div>
                                
                                <div className="form-group">
                                    <div className="form-check">
                                    
                                    <input
                                        type="radio"
                                        name="nivelPrioritate"
                                        id="urgenta"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="urgenta"
                                        onChange={(e) => setUrgenta(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="urgenta">Urgență: </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    
                                    <input
                                        type="radio"
                                        name="nivelPrioritate"
                                        id="curente"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="curente"
                                        onChange={(e) => setCurente(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="curente">Curente: </label>
                                    </div>
                                </div>

                                <div className="form-group" style={{marginTop:'50px'}}>
                                    <label htmlFor="nrContract">Număr Contract: </label>
                                    <input
                                        type="number"
                                        min="1"
                                        step="any"
                                        name="nrContract"
                                        placeholder="Număr Contract"
                                        className="form-control"
                                        //value={trimitere.numar}
                                        onChange={(e) => setNrContract(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <hr className="horizontal-line" />

                    <div><h6>3. Date de identificare pacient</h6></div>
                    <div style={{ flex: 1}}>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                <label htmlFor="asiguratLaCas">Asigurat La Cas: </label>
                                    
                                    <input
                                        type="text"
                                        name="asiguratLaCas"
                                        autoComplete="on"
                                        placeholder="..............................................."
                                        className="form-control"
                                        // defaultValue={userFirstName}
                                        //value={userFirstName}
                                        onChange={(e) => setAsiguratLaCas(e.target.value)}
                                        //required
                                    />
                                    
                                    
                                </div>

                                <div className="form-group">
                                    <label htmlFor="nume">Nume: </label>
                                    <input
                                        type="text"
                                        name="nume"
                                        //autoComplete="on"
                                        placeholder={userLastName}
                                        className="form-control"
                                        // defaultValue={userFirstName}
                                        value={userLastName}
                                        onChange={(e) => setNume(e.target.value)}
                                        //required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="prenume">Prenume: </label>
                                    <input
                                        type="text"
                                        name="prenume"
                                        //autoComplete="on"
                                        placeholder={userFirstName}
                                        className="form-control"
                                        // defaultValue={userFirstName}
                                        value={userFirstName}
                                        onChange={(e) => setPrenume(e.target.value)}
                                        //required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="adresa">Adresă: </label>
                                    <input
                                        type="text"
                                        name="adresa"
                                        //autoComplete="on"
                                        placeholder="Adresă"
                                        className="form-control"
                                        // defaultValue={userFirstName}
                                        // value={userFirstName}
                                        onChange={(e) => setAdresa(e.target.value)}
                                        //required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cnp">CNP: </label>
                                    <input
                                        type="text"
                                        name="cnp"
                                        //autoComplete="on"
                                        placeholder="CNP"
                                        className="form-control"
                                        // defaultValue={userFirstName}
                                        value={userCnp}
                                        onChange={(e) => setCnp(e.target.value)}
                                        //required
                                    />
                                </div>

                                
                                
                                <div className="wrapper-sex">
                                <div><p>Beneficiar</p></div>
                                <div className="form-group" style={{marginLeft:'50px'}}>
                                    <div className="form-check" style={{marginLeft:'50px'}}>
                                    
                                    <input
                                        type="radio"
                                        name="beneficiar"
                                        id="pachetDeBaza"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="pachetDeBaza"
                                        onChange={(e) => setPachetDeBaza(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="pachetDeBaza">Pachet de Bază</label>
                                    </div>
                                </div>

                                <div className="form-group" style={{marginLeft:'50px'}}>
                                    <div className="form-check" style={{marginLeft:'50px'}}>
                                    <input
                                        type="radio"
                                        name="beneficiar"
                                        id="pachetMinimal"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="pachetMinimal"
                                        onChange={(e) => setPachetMinimal(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="pachetMinimal">Pachet Minimal</label>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        id="salariat"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="salariat"
                                        onChange={(e) => setSalariat(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="salariat">Salariat</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        id="coasigurat"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="coasigurat"
                                        onChange={(e) => setCoasigurat(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="coasigurat">Coasigurat: </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        id="liberProfesionist"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="liberProfesionist"
                                        onChange={(e) => setLiberProfesionist(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="liberProfesionist">Liber Profesionist</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        id="copil"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="copil"
                                        onChange={(e) => setCopil(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="copil">Copil</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        id="elevUcenicStudent"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="elevUcenicStudent"
                                        onChange={(e) => setElevUcenicStudent(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="elevUcenicStudent">Elev/Ucenic/Student: </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        id="gravida"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="gravida"
                                        onChange={(e) => setGravida(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="gravida">Gravidă/Lehuză</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        id="pensionar"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="pensionar"
                                        onChange={(e) => setPensionar(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="pensionar">Pensionar</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        id="alteCategorii"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="alteCategorii"
                                        onChange={(e) => setAlteCategorii(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="alteCategorii">Alte Categorii</label>
                                    </div>
                                </div>

                                <div className="form-group" style={{marginTop:'40px'}}>
                                    <label htmlFor="cetatenia">Cetățenia: </label>
                                    <input
                                        type="text"
                                        name="cetatenia"
                                        //autoComplete="on"
                                        placeholder="Cetățenia"
                                        className="form-control"
                                        // defaultValue={userFirstName}
                                        // value={userFirstName}
                                        onChange={(e) => setCetatenia(e.target.value)}
                                        //required
                                    />
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        id="veteran"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="veteran"
                                        onChange={(e) => setVeteran(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="veteran">Veteran</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        id="revolutionar"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="revolutionar"
                                        onChange={(e) => setRevolutionar(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="revolutionar">Revoluționar</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        id="handicap"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="handicap"
                                        onChange={(e) => setHandicap(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="handicap">Handicap</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        id="pns"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="pns"
                                        onChange={(e) => setPns(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="pns">PNS</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="ajutorSocial"
                                        onChange={(e) => setAjutorSocial(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="ajutorSocial">Ajutor Social</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="somaj"
                                        onChange={(e) => setSomaj(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="somaj">Șomaj</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="personalContractual"
                                        onChange={(e) => setPersonalContractual(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="personalContractual">Personal Contractual</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="cardEuropean"
                                        onChange={(e) => setCardEuropean(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="cardEuropean">Card European</label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                    <input
                                        type="radio"
                                        name="sectiunea2"
                                        //autoComplete="on"
                                        //placeholder="serie"
                                        className="form-check-input"
                                        // defaultValue={userFirstName}
                                        value="acorduriInternationale"
                                        onChange={(e) => setAcorduriInternationale(e.target.value)}
                                        //required
                                    />
                                    <label htmlFor="acorduriInternationale">Acorduri Internaționale </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="horizontal-line" />

                    <div><h6>4. Diagnostic prezumtiv/diagnostic: </h6></div>
                    <div className="form-group">
                        {/* <label htmlFor="diagnosticPrezumtiv">Diagnostic Prezumtiv </label> */}
                        <input
                            type="text"
                            name="diagnosticPrezumtiv"
                            //autoComplete="on"
                            placeholder="............................................."
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setDiagnosticPrezumtiv(e.target.value)}
                            //required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="codDiagnosticPrezumtiv">Cod Diagnostic Prezumtiv </label>
                        <input
                            type="text"
                            name="codDiagnosticPrezumtiv"
                            //autoComplete="on"
                            placeholder="............................................"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setCodDiagnosticPrezumtiv(e.target.value)}
                            //required
                        />
                    </div>

                    {/* Tip Diagnostic */}
                    
                    <div className="wrapper-sex">
                    <div><p style={{marginTop:'10px'}}>Tip Diagnostic</p></div>
                    <div className="form-group">
                        <label htmlFor="p">P </label>
                        <input
                            type="radio"
                            name="tipDiagnostic"
                            //autoComplete="on"
                            //placeholder="serie"
                            //className="form-control"
                            // defaultValue={userFirstName}
                            value="p"
                            onChange={(e) => setP(e.target.value)}
                            //required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="aS">A/S </label>
                        <input
                            type="radio"
                            name="tipDiagnostic"
                            //autoComplete="on"
                            //placeholder="serie"
                            //className="form-control"
                            // defaultValue={userFirstName}
                            value="aS"
                            onChange={(e) => setAS(e.target.value)}
                            //required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="c">C </label>
                        <input
                            type="radio"
                            name="tipDiagnostic"
                            //autoComplete="on"
                            //placeholder="serie"
                            //className="form-control"
                            // defaultValue={userFirstName}
                            value="c"
                            onChange={(e) => setC(e.target.value)}
                            //required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="m">M </label>
                        <input
                            type="radio"
                            name="tipDiagnostic"
                            //autoComplete="on"
                            //placeholder="serie"
                            //className="form-control"
                            // defaultValue={userFirstName}
                            value="m"
                            onChange={(e) => setM(e.target.value)}
                            //required
                        />
                    </div>
                    </div>

                    
                    <div><h6>Alte Diagnostice Cunoscute:</h6></div>
                    <div className="form-group">
                        {/* <label htmlFor="alteDiagnosticeCunoscute"> </label> */}
                        <input
                            type="text"
                            name="alteDiagnosticeCunoscute"
                            //autoComplete="on"
                            placeholder=".............................................."
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setAlteDiagnosticeCunoscute(e.target.value)}
                            //required
                        />
                    </div>

                    <div className="form-group top-margin">
                        <label htmlFor="codDiagnostic">Cod Diagnostic: </label>
                        <input
                            type="text"
                            name="codDiagnostic"
                            //autoComplete="on"
                            placeholder="Cod Diagnostic"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setCodDiagnostic(e.target.value)}
                            //required
                        />
                    </div>
                    
                    <div><h6 className="top-margin">6. Motivul trimiterii către alte specialități clinice în vederea internării:</h6></div>
                    <div className="form-group">
                        {/* <label htmlFor="motivulTrimiteriiCatreAlteSpecialitati">Motivul Trimiterii Către Alte Specialități: </label> */}
                        <input
                            type="text"
                            name="codDiagnostic"
                            //autoComplete="on"
                            placeholder="Motivul Trimiterii Către Alte Specialități"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setMotivulTrimiteriiCatreAlteSpecialitati(e.target.value)}
                            //required
                        />
                    </div>

                    <div><h6 className="top-margin">7. Investigații și tratamente efectuate:</h6></div>
                    <div className="form-group">
                        <label htmlFor="investigatiiSiTratamenteEfectuate"> </label>
                        <input
                            type="text"
                            name="codDiagnostic"
                            //autoComplete="on"
                            placeholder="Investigații și Tratamente Efectuate"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setInvestigatiiSiTratamenteEfectuate(e.target.value)}
                            //required
                        />
                    </div>

                    <div><h6 className="top-margin">8. Număr de consultații acordate: </h6></div>
                    <div className="form-group">
                        {/* <label htmlFor="nrConsultatiiAcordate"></label> */}
                        <input
                            type="number"
                            min="1"
                            step="any"
                            name="nrConsultatiiAcordate"
                            placeholder="Număr de Consultații Acordate"
                            className="form-control"
                            //value={trimitere.numar}
                            onChange={(e) => setNrDeConsultatiiAcordate(e.target.value)}
                            //required
                        />
                    </div>

                    <hr className="horizontal-line" />

                    <div className="wrapper-sex">
                    <div><h6>9. Data Trimiterii</h6></div>

                    <div className="form-group" style={{width:'120px'}}>
                        {/* <label htmlFor="dataTrimiterii">Data Trimiterii: </label> */}
                        
                        <DatePicker 
                            selected={dataTrimiterii}
                            onChange={date => setDataTrimiterii(date)}
                        />
                        {/* <input
                            type="text"
                            name="dataTrimiterii"
                            //autoComplete="on"
                            placeholder="...................."
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setDataTrimiterii(e.target.value)}
                            //required
                        /> */}
                    </div>
                    
                    {/* <div><label htmlFor="codParafa">Cod Parafa: </label></div>
                    <div className="form-group">
                        
                        <input
                            type="text"
                            name="codParafa"
                            //autoComplete="on"
                            placeholder="Cod Parafa"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setCodParafa(e.target.value)}
                            //required
                        />
                    </div> */}

                    </div>

                    <hr className="horizontal-line" />

                    <div className="wrapper-sex">
                    <div><h6>10. Se internează în unitatea sanitară cu paturi:</h6></div>

                    <div className="form-group" style={{width: '700px'}}>
                        
                        <input
                            type="text"
                            name="seInterneazaInUnitateaSanitaraCuPaturi"
                            //autoComplete="on"
                            placeholder="Se Interneaza în Unitatea Sanitară cu Paturi"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setSeInterneazaInUnitateaSanitaraCuPatur(e.target.value)}
                            //required
                        />
                    </div>
                    <div><p>secția:</p></div>
                    <div className="form-group">
                        {/* <label htmlFor="sectia">Secția: </label> */}
                        <input
                            type="text"
                            name="sectia"
                            //autoComplete="on"
                            placeholder="Secția"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setSectia(e.target.value)}
                            //required
                        />
                    </div>
                    </div>

                    
                    <div><h6>11. Motivul pentru care nu a fost necesară internarea la domiciliu:</h6></div>
                    <div className="form-group">
                        {/* <label htmlFor="motivulPtCareNuAFostNecesaraInternareaLaDomiciliu"> </label> */}
                        <input
                            type="text"
                            name="motivulPtCareNuAFostNecesaraInternareaLaDomiciliu"
                            //autoComplete="on"
                            placeholder="Motivul pentru care nu a fost necesară Internarea la Domiciliu"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setMotivulPtCareNuAFostNecesaraInternareaLaDomiciliu(e.target.value)}
                            //required
                        />
                    </div>

                    <div className="wrapper-sex" style={{justifyContent: 'space-between'}}>
                        <div><h6>12. Data Prezentării:</h6></div>
                        <div><h6>Parafă Medic Servicii Medicale:</h6></div>
                    </div>
                   
                    <div className="wrapper-sex" style={{justifyContent: 'space-between'}}>
                    <div className="form-group">
                        {/* <label htmlFor="dataPrezentarii">Data Prezentării: </label> */}
                        <DatePicker 
                            selected={dataPrezentarii}
                            onChange={date => setDataPrezentarii(date)}
                        />
                        {/* <input
                            type="text"
                            name="dataPrezentarii"
                            //autoComplete="on"
                            placeholder="ZZ/MM/AAAA"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setDataPrezentarii(e.target.value)}
                            //required
                        /> */}
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="parafaMedicServiciiMedicale">Parafă Medic Servicii Medicale: </label> */}
                        <input
                            type="text"
                            name="parafaMedicServiciiMedicale"
                            //autoComplete="on"
                            className="form-control"
                            // defaultValue={userFirstName}
                            value={codParafa}
                            onChange={(e) => setParafaMedicServiciiMedicale(e.target.value)}
                            //required
                        />
                    </div>
                    
                    </div>

                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => handleCloseModal()}>Închide</button>
                    <button type="submit" className="btn btn-primary">Salvați trimiterea</button>
                </div>
            </form>
        </Modal>
    );
});

export {TrimitereSave};