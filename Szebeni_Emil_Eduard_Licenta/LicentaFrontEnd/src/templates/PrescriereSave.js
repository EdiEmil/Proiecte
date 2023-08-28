import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import Trimitere from '../models/Trimitere';
import DoctorService from '../services/DoctorService';
import { Modal } from "react-bootstrap";
import { useRef } from "react";
import Prescriere from "../models/Prescriere";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import ro from 'date-fns/locale/ro';
import { useSelector } from "react-redux";


const PrescriereSave = forwardRef((props, ref) => {

    const { userFirstName } = props;
    const { userLastName } = props;
    const { userCnp } = props;
    const { parafa } = props;
    // console.log("Aici avem numele din Modal: " + userFirstName);

    useImperativeHandle(ref, () => ({
        showPrescriereModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);
        }
    }));

    const [prescriere, setPrescriere] = useState(new Prescriere('', ''));

    // useEffect(() => {
    //     setTrimitere(props.trimitere);
    // }, [props.trimitere]);


    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

    const [serie, setSerie] = useState('');
    const [numar, setNumar] = useState('');
    const [cui, setCui] = useState();
    const [cas, setCas] = useState();
    const [aprobat, setAprobat] = useState(false);
    const [aprobatComisie, setAprobatComisie] = useState();
    const [mf, setMf] = useState(false);
    const [ambulatoriu, setAmbulatoriu] = useState(false);
    const [spital, setSpital] = useState(false);
    const [altele, setAltele] = useState(false);
    const [mfMM, setMfMM] = useState(false);
    const [foRC, setFoRc] = useState();
    const [nume, setNume] = useState('');
    const [prenume, setPrenume] = useState('');
    const [cnp, setCnp] = useState(userCnp);
    const [dataNasterii, setDataNasterii] = useState();
    const [m, setM] = useState(false);
    const [f, setF] = useState(false);

    const [cetatenia, setCetatenia] = useState('');
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

    // aici la pns mai are si un input
    const [pns, setPns] = useState(false);

    //aici scrie 0-700 lei/luna si nu este adaugat in constructor deocamdata
    const [venitMic, setVenitMic] = useState(false);

    const [ajutorSocial, setAjutorSocial] = useState(false);
    const [somaj, setSomaj] = useState(false);
    const [persoanaContractual, setPersoanaContractual] = useState(false);
    const [cardEuropean, setCardEuropean] = useState(false);
    const [acorduriInternationale, setAcorduriInternationale] = useState(false);
    const [diagnostic, setDiagnostic] = useState('');
    // trebuie sa vedem cum facem pt date
    const [dataPrescriere, setDataPrescriere] = useState();

    const [nrZilePrescrise, setNrZilePrescrise] = useState('');
    const [codDiagnostic1, setCodDiagnostic1] = useState();
    const [codDiagnostic2, setCodDiagnostic2] = useState();
    const [codDiagnostic3, setCodDiagnostic3] = useState();
    const [codDiagnostic4, setCodDiagnostic4] = useState();
    const [codDiagnostic5, setCodDiagnostic5] = useState();
    const [codDiagnostic6, setCodDiagnostic6] = useState();
    const [codDiagnostic7, setCodDiagnostic7] = useState();
    const [tipDiagnostic1, setTipDiagnostic1] = useState('');
    const [tipDiagnostic2, setTipDiagnostic2] = useState('');
    const [tipDiagnostic3, setTipDiagnostic3] = useState('');
    const [tipDiagnostic4, setTipDiagnostic4] = useState('');
    const [tipDiagnostic5, setTipDiagnostic5] = useState('');
    const [tipDiagnostic6, setTipDiagnostic6] = useState('');
    const [tipDiagnostic7, setTipDiagnostic7] = useState('');
    const [denumireComunaInternationala1, setDenumireComunaInternationala1] = useState('');
    const [denumireComunaInternationala2, setDenumireComunaInternationala2] = useState('');
    const [denumireComunaInternationala3, setDenumireComunaInternationala3] = useState('');
    const [denumireComunaInternationala4, setDenumireComunaInternationala4] = useState('');
    const [denumireComunaInternationala5, setDenumireComunaInternationala5] = useState('');
    const [denumireComunaInternationala6, setDenumireComunaInternationala6] = useState('');
    const [denumireComunaInternationala7, setDenumireComunaInternationala7] = useState('');
    const [ds1, setDs1] = useState('');
    const [ds2, setDs2] = useState('');
    const [ds3, setDs3] = useState('');
    const [ds4, setDs4] = useState('');
    const [ds5, setDs5] = useState('');
    const [ds6, setDs6] = useState('');
    const [ds7, setDs7] = useState('');
    const [cantitate1, setCantitate1] = useState('');
    const [cantitate2, setCantitate2] = useState('');
    const [cantitate3, setCantitate3] = useState('');
    const [cantitate4, setCantitate4] = useState('');
    const [cantitate5, setCantitate5] = useState('');
    const [cantitate6, setCantitate6] = useState('');
    const [cantitate7, setCantitate7] = useState('');
    const [pretRef1, setPretRef1] = useState();
    const [pretRef2, setPretRef2] = useState();
    const [pretRef3, setPretRef3] = useState();
    const [pretRef4, setPretRef4] = useState();
    const [pretRef5, setPretRef5] = useState();
    const [pretRef6, setPretRef6] = useState();
    const [pretRef7, setPretRef7] = useState();
    const [lista1, setLista1] = useState('');
    const [lista2, setLista2] = useState('');
    const [lista3, setLista3] = useState('');
    const [lista4, setLista4] = useState('');
    const [lista5, setLista5] = useState('');
    const [lista6, setLista6] = useState('');
    const [lista7, setLista7] = useState('');
    const [parafaMedicPrescriptor, setParafaMedicPrescriptor] = useState('');
    const [farmacieDeTrimis, setFarmacieDeTrimis] = useState('');
    const [farmacieId, setFarmacieId] = useState();

    if (mf === 'mf'){
        setMf(true);
        setAmbulatoriu(false);
        setSpital(false);
        setAltele(false);
    } else if(ambulatoriu === 'ambulatoriu'){
        setMf(false);
        setAmbulatoriu(true);
        setSpital(false);
        setAltele(false);
    } else if(spital === 'spital'){
        setMf(false);
        setAmbulatoriu(false);
        setSpital(true);
        setAltele(false);
    } else if(altele === 'altele'){
        setMf(false);
        setAmbulatoriu(false);
        setSpital(false);
        setAltele(true);
    }

    if (m === "m") {
        setM(true);
        setF(false);
    } else if (f === "f") {
        setM(false);
        setF(true);
    }

    if (salariat === 'salariat') {
        setSalariat(true);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (coasigurat === 'coasigurat') {
        setSalariat(false);
        setCoasigurat(true);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (liberProfesionist === 'liberProfesionist') {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(true);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (copil) {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(true);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (elevUcenicStudent === "elevUcenicStudent") {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(true);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (gravida === "gravida") {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(true);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (pensionar === "pensionar") {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(true);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (veteran === "veteran") {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(true);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (venitMic === "venitMic") {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(true);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (revolutionar === "revolutionar") {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(revolutionar);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (handicap === "handicap") {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(true);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (pns === "pns") {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(true);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (ajutorSocial === "ajutorSocial") {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(true);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (somaj === "somaj") {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(true);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (persoanaContractual === "personalContractual") {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(true);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (cardEuropean === "cardEuropean") {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(true);
        setAcorduriInternationale(false);
        setAlteCategorii(false);
    } else if (acorduriInternationale === "acorduriInternationale") {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(true);
        setAlteCategorii(false);
    } else if (alteCategorii === "alteCategorii") {
        setSalariat(false);
        setCoasigurat(false);
        setLiberProfesionist(false);
        setCopil(false);
        setElevUcenicStudent(false);
        setGravida(false);
        setPensionar(false);
        setVeteran(false);
        setVenitMic(false);
        setRevolutionar(false);
        setHandicap(false);
        setPns(false);
        setAjutorSocial(false);
        setSomaj(false);
        setPersoanaContractual(false);
        setCardEuropean(false);
        setAcorduriInternationale(false);
        setAlteCategorii(true);
    }

    useEffect(() => {

        setPrescriere(new Prescriere(serie, numar, cui, cas, aprobat, aprobatComisie, mf, ambulatoriu, spital, altele, mfMM, foRC, userFirstName, userLastName, userCnp, dataNasterii, m, f, cetatenia, salariat, coasigurat, liberProfesionist, copil, elevUcenicStudent, gravida, pensionar, alteCategorii, veteran, revolutionar, handicap, pns, ajutorSocial, somaj, persoanaContractual, cardEuropean, acorduriInternationale, diagnostic,dataPrescriere, nrZilePrescrise, codDiagnostic1, tipDiagnostic1, denumireComunaInternationala1, ds1, cantitate1, pretRef1, lista1, codDiagnostic2, tipDiagnostic2, denumireComunaInternationala2, ds2, cantitate2, pretRef2, lista2,parafaMedicPrescriptor));
    }, [serie, numar, cui, cas, aprobat, aprobatComisie, mf, ambulatoriu, spital, altele, mfMM, foRC, nume, prenume, cnp, dataNasterii, m, f, cetatenia, salariat, coasigurat, liberProfesionist, copil, elevUcenicStudent, gravida, pensionar, alteCategorii, veteran, revolutionar, handicap, pns, ajutorSocial, somaj, persoanaContractual, cardEuropean, acorduriInternationale, diagnostic,dataPrescriere ,nrZilePrescrise, codDiagnostic1, tipDiagnostic1, denumireComunaInternationala1, ds1, cantitate1, pretRef1, lista1, codDiagnostic2, tipDiagnostic2, denumireComunaInternationala2, ds2, cantitate2, pretRef2, lista2,parafaMedicPrescriptor]);

    const savePrescriere = (e) => {
        e.preventDefault();

        setSubmitted(true);

        DoctorService.createPrescriere(prescriere).then(response => {
            props.onSaved(response.data);
            setShow(false);
            setSubmitted(false);
            setSuccessMessage('Înregistrare realizată cu succes');
        }).catch(err => {
            setErrorMessage("Eroare pentru creare Prescriere");
            console.log(err);
        });

        setSuccessMessage('');
    };

    const getCombinations = () => {
        DoctorService.getCombinations().then((response) => {
            setSerie(response.data);
        })

        DoctorService.getNumbers().then((response) => {
            setNumar(response.data);
        })
     }

    const handleCloseModal = () => {
        setShow(false);
        setSuccessMessage('');
        setErrorMessage('');
    }

    // const getWidth = () => {
    //     const length = serie.le 
    // }

    return (
        <Modal show={show} >
            <form onSubmit={(e) => savePrescriere(e)}
            noValidate
             className={submitted ? 'was-validated' : ''}
            >

                <div className="modal-header">
                    <h5 className="modal-title">Prescriere</h5>
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

                    <div style={{ flex: 1 }}>
                        <div className="row">
                       
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label htmlFor="serie">Serie:</label>
                                    <input
                                        type="text"
                                        name="serie"
                                        autoComplete="on"
                                        placeholder="............................................"
                                        value={serie}
                                        className="form-control"
                                        onChange={(e) => setSerie(e.target.value)}
                                    //required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cui">CUI:</label>
                                    <input
                                        type="text"
                                        name="cui"
                                        autoComplete="on"
                                        placeholder="............................................"
                                        className="form-control"
                                        onChange={(e) => setCui(e.target.value)}
                                    //required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cas">CAS:</label>
                                    <input
                                        type="text"
                                        name="cas"
                                        autoComplete="on"
                                        placeholder="............................................"
                                        className="form-control"
                                        onChange={(e) => setCas(e.target.value)}
                                    //required
                                    />
                                </div>
                                
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label htmlFor="numar">Numar:</label>
                                    <input
                                        type="number"
                                        min="1"
                                        step="any"
                                        name="numar"
                                        placeholder="............................................"
                                        className="form-control"
                                        value={numar}
                                        onChange={(e) => setNumar(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="aprobatComisie">Aprobat Comisie:</label>
                                    <input
                                        type="text"
                                        name="aprobatComisie"
                                        autoComplete="on"
                                        placeholder="............................................"
                                        className="form-control"
                                        onChange={(e) => setAprobatComisie(e.target.value)}
                                    //required
                                    />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">

                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="radioGroup"
                                            id="mf"
                                            value="mf"
                                            onChange={(e) => setMf(e.target.value)}
                                        />
                                        <label htmlFor="mf">MF</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="radioGroup"
                                            id="ambulatoriu"
                                            value="ambulatoriu"
                                            onChange={(e) => setAmbulatoriu(e.target.value)}
                                        />
                                        <label htmlFor="ambulatoriu">Ambulatoriu</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="radioGroup"
                                            id="spital"
                                            value="spital"
                                            onChange={(e) => setSpital(e.target.value)}
                                        />
                                        <label htmlFor="spital">Spital</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="radioGroup"
                                            id="altele"
                                            value="altele"
                                            onChange={(e) => setAltele(e.target.value)}
                                        />
                                        <label htmlFor="altele">Altele</label>
                                    </div>
                                    <button type="button" className="btn btn-secondary" style={{maxWidth: '200px'}} onClick={() => getCombinations()}>Generează seria și numărul</button>

                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="horizontal-line" />



                    {/* Pana aici partea de Aprobat Comisie */}



                    {/* Asigurat */}
                    <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}> 
                        <h2 style={{display: 'inline-block'}}>2. Asigurat</h2> 
                    
                    
                   

                        
                        <div className="form-group" style={{display: 'inline-block', marginBottom: '10px'}}>
                            <label htmlFor="foRC">FoRc: </label>
                            <input
                                type="text"
                                name="foRC"
                                autoComplete="on"
                                placeholder="............................................"
                                className="form-control"
                                // defaultValue={userFirstName}
                                // value={userFirstName}
                                onChange={(e) => setFoRc(e.target.value)}
                            //required
                            />
                        </div>
                        </div>
                    
                    <div style={{ flex:1}}>
                        <div className="row">
                            <div className="col-sm-4">
                            <div className="form-group">
                                <label htmlFor="nume">Nume: </label>
                                <input
                                    id="nume"
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
                                <label htmlFor="cnp">CNP: </label>
                                <input
                                    type="text"
                                    name="cnp"
                                    //autoComplete="on"
                                    //placeholder={userCnp}
                                    className="form-control"
                                    // defaultValue={userFirstName}
                                    value={userCnp}
                                    onChange={(e) => setCnp(e.target.value)}
                                    //required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dataNasterii">Data Nasterii:</label>
                                <input
                                    type="text"
                                    name="dataNasterii"
                                    autoComplete="on"
                                    placeholder="............................................"
                                    className="form-control"
                                    // defaultValue={userFirstName}
                                    // value={userFirstName}
                                    onChange={(e) => setDataNasterii(e.target.value)}
                                //required
                                />
                                <div className="invalid-feedback">
                                    Serie is required.
                                </div>
                            </div>
                            
                            
                                
                                    <div className="wrapper-sex">
                                        
                                            <div className="form-group">
                                                <div className="form-check">
                                                <input
                                                    type="radio"
                                                    name="sex"
                                                    id="m"
                                                    className="form-check-input"
                                                    //autoComplete="on"
                                                    //placeholder="serie"
                                                    //className="form-control"
                                                    // defaultValue={userFirstName}
                                                    value='m'
                                                    onChange={(e) => setM(e.target.value)}
                                                //required
                                                />
                                                <label  htmlFor="m">M</label>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                
                                                <div className="form-check">
                                                <input
                                                    id="f"
                                                    type="radio"
                                                    name="sex"
                                                    //autoComplete="on"
                                                    //placeholder="serie"
                                                    className="form-check-input"
                                                    // defaultValue={userFirstName}
                                                    value="f"
                                                    onChange={(e) => setF(e.target.value)}
                                                //required
                                                />
                                                <label  htmlFor="f">F</label>
                                                </div>
                                            </div>
                                        
                                    
                                    <div style={{ flex: 1 }}>
                                        <div className="form-group">
                                            <label htmlFor="cetatenia">Cetățenia </label>
                                            <input
                                                type="text"
                                                name="cetatenia"
                                                autoComplete="on"
                                                placeholder="............................................"
                                                className="form-control"
                                                // defaultValue={userFirstName}
                                                // value={userFirstName}
                                                onChange={(e) => setCetatenia(e.target.value)}
                                            //required
                                            />
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
                                    className="form-check-input"
                                    value="salariat"
                                    onChange={(e) => setSalariat(e.target.value)}
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
                                    className="form-check-input"
                                    value="coasigurat"
                                    onChange={(e) => setCoasigurat(e.target.value)}
                                />
                                <label htmlFor="coasigurat">Coasigurat</label>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="form-check">
                                <input
                                    type="radio"
                                    name="sectiunea2"
                                    id="liberProfesionist"
                                    className="form-check-input"
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
                                    className="form-check-input"
                                    value="copil"
                                    onChange={(e) => setCopil(e.target.value)}
                                //required
                                />
                                <label htmlFor="copil" >Copil({"\u003C"} 18 ani)</label>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="form-check">
                                <input
                                    type="radio"
                                    name="sectiunea2"
                                    id="elevUcenicStudent"
                                    className="form-check-input"
                                    value="elevUcenicStudent"
                                    onChange={(e) => setElevUcenicStudent(e.target.value)}
                                />
                                <label htmlFor="elevUcenicStudent">Elev/Ucenic/Student</label>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="form-check">
                                <input
                                    type="radio"
                                    name="sectiunea2"
                                    id="gravida"
                                    className="form-check-input"
                                    value="gravida"
                                    onChange={(e) => setGravida(e.target.value)}
                                />
                                <label htmlFor="gravida">Gravida/Lehuza</label>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="form-check">
                                <input
                                    type="radio"
                                    name="sectiunea2"
                                    id="pensionar"
                                    className="form-check-input"
                                    value="pensionar"
                                    onChange={(e) => setPensionar(e.target.value)}
                                />
                                <label htmlFor="pensionar">Pensionar</label>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="form-check">
                                <input
                                    type="radio"
                                    name="sectiunea2"
                                    id="veteran"
                                    className="form-check-input"
                                    value="veteran"
                                    onChange={(e) => setVeteran(e.target.value)}
                                />
                                <label htmlFor="veteran">Veteran</label>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="form-check">
                                <input
                                    type="radio"
                                    name="sectiunea2"
                                    id="venitMic"
                                    //autoComplete="on"
                                    //placeholder="serie"
                                    className="form-check-input"
                                    // defaultValue={userFirstName}
                                    value="venitMic"
                                    onChange={(e) => setVenitMic(e.target.value)}
                                //required
                                />
                                <label htmlFor="venitMic">0 - 700 lei/luna</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
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
                                <label htmlFor="revolutionar">Revolutionar</label>
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
                                    id="ajutorSocial"
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
                                    id="somaj"
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
                                    id="personalContractual"
                                    //autoComplete="on"
                                    //placeholder="serie"
                                    className="form-check-input"
                                    // defaultValue={userFirstName}
                                    value="persoanlContractual"
                                    onChange={(e) => setPersoanaContractual(e.target.value)}
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
                                    id="cardEuropean"
                                    //autoComplete="on"
                                    //placeholder="serie"
                                    className="form-check-input"
                                    // defaultValue={userFirstName}
                                    value="cardEuropean"
                                    onChange={(e) => setCardEuropean(e.target.value)}
                                //required
                                />
                                <label htmlFor="cardEuropean">Card European(CE)</label>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                <div className="form-check">
                                <input
                                    type="radio"
                                    name="sectiunea2"
                                    id="acorduriInternationale"
                                    //autoComplete="on"
                                    //placeholder="serie"
                                    className="form-check-input"
                                    // defaultValue={userFirstName}
                                    value="acorduriInternational"
                                    onChange={(e) => setAcorduriInternationale(e.target.value)}
                                //required
                                />
                                <label htmlFor="acorduriInternational">Acord Internațional</label>
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

                        </div>
                        </div>
                    </div>


                    <hr className="horizontal-line" />


                    <div><h3>3.Diagnostic / Cod Diagnostic</h3></div>
                    <div className="form-group">
                        {/* <label htmlFor="diagnostic">Diagnostic: </label> */}
                        <input
                            type="text"
                            name="diagnostic"
                            placeholder="........................................................................................................................................................................................."
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setDiagnostic(e.target.value)}
                        //required
                        />
                    </div>

                    <hr className="horizontal-line" />

                    {/* <DatePicker
                        selected={dataNasterii}
                        onChange={date => setDataNasterii(date)}
                        dateFormat="yyyy/MM/dd"
                    /> */}
                    {/* <div><h3>4. Dată prescriere</h3></div> */}
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="dataPrescriere">Dată Prescriere: </label>
                                <DatePicker 
                                    id="dataPrescriere"
                                    selected={dataPrescriere}
                                    onChange={date => setDataPrescriere(date)}
                                    locale={ro}
                                />
                                {/* <input
                                    type="text"
                                    name="dataPrescriere"
                                    placeholder=".........................................................................................................................................................................."
                                    className="form-control"
                                    // defaultValue={userFirstName}
                                    // value={userFirstName}
                                    onChange={(e) => setDataPrescriere(e.target.value)}
                                //required
                                /> */}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="nrZilePrescriere">Număr zile prescrise: </label>
                                <input
                                    type="text"
                                    name="nrZilePrescriere"
                                    placeholder="..........................................................................................."
                                    className="form-control"
                                    // defaultValue={userFirstName}
                                    // value={userFirstName}
                                    onChange={(e) => setNrZilePrescrise(e.target.value)}
                                //required
                                />
                            </div>
                        </div>
                    </div>

                    <table style={{marginTop: '20px'}} className="form-table">
                        <thead>
                            <tr>
                                <th style={{ width: '15px' , marginRight: '10px', textAlign: 'center'}}>
                                    #
                                </th>
                                <th style={{maxWidth: '10px', textAlign: 'center'}}>
                                    Cod Diagnostic
                                </th>
                                <th style={{ maxWidth: '35px' , textAlign: 'center'}}>
                                    Tip Diagnostic
                                </th>
                                <th style={{textAlign: 'center'}}>
                                    Denumirea Internațională
                                </th>
                                <th style={{ width: '25px', textAlign: 'center' }}>
                                    Preț Referință
                                </th>
                                <th style={{maxWidth: '10px', textAlign: 'center'}}>
                                    Cantitate
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="codDiagnostic1"
                                        placeholder="Cod diagnostic"
                                        className="form-control"
                                        onChange={(e) => setCodDiagnostic1(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="tipDiagnostic1"
                                        placeholder="Tip Diagnostic"
                                        className="form-control"
                                        onChange={(e) => setTipDiagnostic1(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="nrZilePrescrise1"
                                        placeholder="Denumirea Internațională"
                                        className="form-control"
                                        onChange={(e) => setDenumireComunaInternationala1(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="pretReferinta"
                                        placeholder="pretReferinta"
                                        className="form-control"
                                        onChange={(e) => setPretRef1(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="cantitate1"
                                        placeholder="Cantitate"
                                        className="form-control"
                                        onChange={(e) => setCantitate1(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="codDiagnostic2"
                                        placeholder="Cod diagnostic"
                                        className="form-control"
                                        onChange={(e) => setCodDiagnostic2(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="tipDiagnostic2"
                                        placeholder="Tip Diagnostic"
                                        className="form-control"
                                        onChange={(e) => setTipDiagnostic2(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="nrZilePrescrise2"
                                        placeholder="Denumirea Internațională"
                                        className="form-control"
                                        onChange={(e) => setDenumireComunaInternationala2(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="ds2"
                                        placeholder="DS"
                                        className="form-control"
                                        onChange={(e) => setDs2(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="cantitate2"
                                        placeholder="Cantitate"
                                        className="form-control"
                                        onChange={(e) => setCantitate2(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="codDiagnostic3"
                                        placeholder="Cod diagnostic"
                                        className="form-control"
                                        onChange={(e) => setCodDiagnostic3(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="tipDiagnostic3"
                                        placeholder="Tip Diagnostic"
                                        className="form-control"
                                        onChange={(e) => setTipDiagnostic3(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="nrZilePrescrise3"
                                        placeholder="Denumirea Internațională"
                                        className="form-control"
                                        onChange={(e) => setDenumireComunaInternationala3(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="ds3"
                                        placeholder="DS"
                                        className="form-control"
                                        onChange={(e) => setDs3(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="cantitate3"
                                        placeholder="Cantitate"
                                        className="form-control"
                                        onChange={(e) => setCantitate3(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    4
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="codDiagnostic4"
                                        placeholder="Cod diagnostic"
                                        className="form-control"
                                        onChange={(e) => setCodDiagnostic4(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="tipDiagnostic4"
                                        placeholder="Tip Diagnostic"
                                        className="form-control"
                                        onChange={(e) => setTipDiagnostic4(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="nrZilePrescrise4"
                                        placeholder="Denumirea Internațională"
                                        className="form-control"
                                        onChange={(e) => setDenumireComunaInternationala4(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="ds4"
                                        placeholder="DS"
                                        className="form-control"
                                        onChange={(e) => setDs4(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="cantitate4"
                                        placeholder="Cantitate"
                                        className="form-control"
                                        onChange={(e) => setCantitate4(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    5
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="codDiagnostic5"
                                        placeholder="Cod diagnostic"
                                        className="form-control"
                                        onChange={(e) => setCodDiagnostic5(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="tipDiagnostic5"
                                        placeholder="Tip Diagnostic"
                                        className="form-control"
                                        onChange={(e) => setTipDiagnostic5(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="nrZilePrescrise5"
                                        placeholder="Denumirea Internațională"
                                        className="form-control"
                                        onChange={(e) => setDenumireComunaInternationala5(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="ds5"
                                        placeholder="DS"
                                        className="form-control"
                                        onChange={(e) => setDs5(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="cantitate5"
                                        placeholder="Cantitate"
                                        className="form-control"
                                        onChange={(e) => setCantitate5(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    6
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="codDiagnostic6"
                                        placeholder="Cod diagnostic"
                                        className="form-control"
                                        onChange={(e) => setCodDiagnostic6(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="tipDiagnostic6"
                                        placeholder="Tip Diagnostic"
                                        className="form-control"
                                        onChange={(e) => setTipDiagnostic6(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="nrZilePrescrise6"
                                        placeholder="Denumirea Internațională"
                                        className="form-control"
                                        onChange={(e) => setDenumireComunaInternationala6(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="ds6"
                                        placeholder="DS"
                                        className="form-control"
                                        onChange={(e) => setDs6(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="cantitate6"
                                        placeholder="Cantitate"
                                        className="form-control"
                                        onChange={(e) => setCantitate6(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    7
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="codDiagnostic7"
                                        placeholder="Cod diagnostic"
                                        className="form-control"
                                        onChange={(e) => setCodDiagnostic7(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="tipDiagnostic7"
                                        placeholder="Tip Diagnostic"
                                        className="form-control"
                                        onChange={(e) => setTipDiagnostic7(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="nrZilePrescrise7"
                                        placeholder="Denumirea Internațională"
                                        className="form-control"
                                        onChange={(e) => setDenumireComunaInternationala7(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="ds7"
                                        placeholder="DS"
                                        className="form-control"
                                        onChange={(e) => setDs7(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="cantitate7"
                                        placeholder="Cantitate"
                                        className="form-control"
                                        onChange={(e) => setCantitate7(e.target.value)}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="form-group" style={{marginTop: '20px'}}>
                        <label htmlFor="parafaMedicPrescriptor">Parafă medic prescriptor: </label>
                        <input
                            type="text"
                            name="parafaMedicPrescriptor"
                            placeholder="..........................................................................................."
                            className="form-control"
                            style={{ width: '200px' }}
                            // defaultValue={userFirstName}
                             value={parafa}
                            onChange={(e) => setParafaMedicPrescriptor(e.target.value)}
                        //required
                        />
                    </div>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => handleCloseModal()}>Închide</button>
                    <button type="submit" className="btn btn-primary">Salvează Prescrierea</button>
                </div>
            </form>
        </Modal>
    );
});

export { PrescriereSave };