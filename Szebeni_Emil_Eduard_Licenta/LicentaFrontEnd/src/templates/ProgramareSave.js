import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import Programare from '../models/Programare';
import DoctorService from '../services/DoctorService';
import { Modal } from "react-bootstrap";
import { useRef } from "react";
import UserService from "../services/UserService";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import"react-datepicker/dist/react-datepicker.css"
import ro from 'date-fns/locale/ro';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const NUMBERS_ONLY = /^[0-9]+$/;
const WORDS_ONLY = /^[a-zA-Z\s]+$/;
const ProgramareSave = forwardRef((props, ref) => {

     const { numePacient } = props;
     const { prenumePacient } = props;
     const { cnpPacient } = props;

     
    
    // console.log("Aici avem numele din Modal: " + userFirstName);

    useImperativeHandle(ref, () => ({
         showProgramareModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);
         }
    }));

    const [programare, setProgramare] = useState(new Programare('', ''));

    // useEffect(() => {
    //     setTrimitere(props.trimitere);
    // }, [props.trimitere]);

    
    const [numeDoctor, setNumeDoctor] = useState('');
    const [prenumeDoctor, setPrenumeDoctor] = useState('');
    const [oras, setOras] = useState('');
    const [spital, setSpital] = useState('');
    const [sectie, setSectie] = useState('');
    const [dataProgramare, setDataProgramare] = useState();
    const [intervalOrar, setIntervalOrar] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

    const [validNumeDoctor, setValidNumeDoctor] = useState(false);
    const [validPrenumeDoctor, setValidPrenumeDoctor] = useState(false);
    const [validOras, setValidOras] = useState(false);
    const [validSpital, setValidSpital] = useState(false);
    const [validSectie, setValidSectie] = useState(false);
    const [validIntervalOrar, setValidIntervalOrar] = useState(false);
    const [validSelection, setValidSelection] = useState(false);


    const [dropDownTrimitere, setDropDownTrimitere] = useState([]);
    const [trimitereId, setTrimitereId] = useState();

    const [nume,setNume] = useState();

    const currentUser = useSelector(state => state.user);
    const userId = currentUser?.id;
    const userCnp = currentUser?.cnp;
    
    useEffect(() => {
        UserService.getTrimitereByCnp(userCnp).then(response => {
            setDropDownTrimitere(response.data);
        })
    },[])

    useEffect(() => {
        
        setProgramare(new Programare(numePacient,prenumePacient,cnpPacient,numeDoctor,prenumeDoctor,oras,spital,sectie,intervalOrar,'','','','',dataProgramare,''));
    },[numePacient,prenumePacient,cnpPacient,numeDoctor,prenumeDoctor,oras,spital,sectie,intervalOrar,dataProgramare]);

    

    const selectedTrimitere = (e) => {
        setTrimitereId(e.target.value);
        console.log("Aici avem id-ul selectat din option: " + trimitereId);
    };


    const saveProgramare = (e) => {
        e.preventDefault();

        setSubmitted(true);

        // if(!trimitere.serie || !trimitere.numar){
        //     return;
        // }

        UserService.createProgramare(userId,trimitereId,programare).then(response => {
            props.onSaved(response.data);
            setShow(false);
            setSubmitted(false);
            setSuccessMessage('Înregistrare realizată cu succes');
        }).catch(err => {
            setErrorMessage("Eroare pentru creare Programare");
            console.log(err);
        });
    };

    const handleCloseModal = () => {
        setShow(false);
        setSuccessMessage('');
        setErrorMessage('');
        //setValidSelection(false);
        setTrimitereId();
        setSuccessMessage('');
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

    useEffect(() => {
        const result = WORDS_ONLY.test(numeDoctor);
        setValidNumeDoctor(result);
    },[numeDoctor])

    useEffect(() => {
        const result = WORDS_ONLY.test(prenumeDoctor);
        setValidPrenumeDoctor(result);
    },[prenumeDoctor])

    useEffect(() => {
        const result = WORDS_ONLY.test(oras);
        setValidOras(result);
    },[oras])

    useEffect(() => {
        const result = WORDS_ONLY.test(spital);
        setValidSpital(result);
    },[spital])

    useEffect(() => {
        const result = WORDS_ONLY.test(sectie);
        setValidSectie(result);
    },[sectie])

    useEffect(() => {
        //if(show === true){
            const result = NUMBERS_ONLY.test(trimitereId);
            setValidSelection(result);
        //}
        
    },[trimitereId])

    

    return (
        <Modal show={show}>
            <form onSubmit={(e) => saveProgramare(e)}
        >

                <div className="modal-header">
                    <h5 className="modal-title">Programare - Toate câmpurile trebuie completate</h5>
                    <button type="button" className="btn-close" onClick={() => handleCloseModal()}></button>
                </div>

                <div className="modal-body">
                    {/* {successMessage &&
                        <div className="alert alert-success">{successMessage}</div>

                    } */}
                    {errorMessage &&
                    <div className="alert alert-danger">
                        {errorMessage}
                    </div>
                    }

                        {/* aici unde am value trebuie sa fac ca la regisrter unde nu folosim value si sa setes setSerie cu valoarea primita din props  */}
                    <div className="form-group">
                        <label htmlFor="numePacient">Nume Pacient: </label>
                        <input
                            type="text"
                            name="numePacient"
                            //autoComplete="on"
                            placeholder={numePacient}
                            className="form-control"
                            // defaultValue={userFirstName}
                            value={numePacient}
                            onChange={(e) => setNume(e.target.value)}
                            //required
                        />
                    </div>

                    {/* <div className="form-group">
                        <label htmlFor="prenumePacient">Prenume Pacient: </label>
                        <input
                            type="text"
                            name="prenumePacient"
                            placeholder="Prenume Pacient"
                            className="form-control"
                            value={prenumePacient}
                            // onChange={(e) => set}
                            //required
                        />
                    </div> */}

                    {/* <div className="form-group">
                        <label htmlFor="cnpPacient">CNP Pacient: </label>
                        <input
                            type="number"
                            min="1"
                            step="any"
                            name="cnpPacient"
                            placeholder="CNP Pacient"
                            className="form-control"
                            value={cnpPacient}
                            //onChange={(e) => setNumar(e.target.value)}
                            //required
                        />
                    </div> */}

                    <div className="form-group">
                        <label htmlFor="numeDoctor">Nume Doctor: </label>
                        <input
                            type="text"
                            name="numeDoctor"
                            //autoComplete="on"
                            placeholder="Nume Doctor"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setNumeDoctor(e.target.value)}
                            //required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="prenumeDoctor">Prenume Doctor: </label>
                        <input
                            type="text"
                            name="prenumeDoctor"
                            //autoComplete="on"
                            placeholder="Prenume Doctor"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setPrenumeDoctor(e.target.value)}
                            //required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="oras">Oras: </label>
                        <input
                            type="text"
                            name="oras"
                            //autoComplete="on"
                            placeholder="Oras"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setOras(e.target.value)}
                            //required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="spital">Spital: </label>
                        <input
                            type="text"
                            name="spital"
                            //autoComplete="on"
                            placeholder="Spital"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setSpital(e.target.value)}
                            //required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="sectie">Sectie: </label>
                        <input
                            type="text"
                            name="sectie"
                            //autoComplete="on"
                            placeholder="Sectie"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setSectie(e.target.value)}
                            //required
                        />
                    </div>

                    <div style={{width: "120px"}}>
                        {/* <label htmlFor="intervalOrar">Interval Orar: </label> */}
                        <TimePicker
                        label="Ora Programării" 
                            value={intervalOrar}
                            onChange={setIntervalOrar}
                        />
                        {/* <input
                            type="text"
                            name="intervalOrar"
                            //autoComplete="on"
                            placeholder="Interval Orar"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setIntervalOrar(e.target.value)}
                            //required
                        /> */}
                    </div>

                    
                    <div className="form-group">
                        <label htmlFor="dataProgramare">Selectați data programării: </label>
                        <DatePicker
                            id="dataProgramare"
                            
                            selected={dataProgramare}
                            onChange={date => setDataProgramare(date)}
                            locale = {ro}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Trimitere">Trimitere: </label>
                        <select onChange={(e) => selectedTrimitere(e)} className={`form-selected form-control rounded-0`} aria-invalid={validSelection ? "false" : "true"}>
                            <option value="">Selectați o trimitere</option>
                            {dropDownTrimitere && 
                                dropDownTrimitere.map((trimitere) => (
                                    <option key={trimitere.id} value={trimitere.id} className="text-primary">{trimitere.numar} </option>

                                ))    
                            }
                        </select>
                        <div>
                        </div>
                    </div>


                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => handleCloseModal()}>Închide</button>
                    <button type="submit" className="btn btn-primary" disabled={!validSelection || !validNumeDoctor || !validPrenumeDoctor || !validOras || !validSpital || !validSectie ? true : false}>Salvează</button>
                </div>
            </form>
        </Modal>
    );
});

export {ProgramareSave};

