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
import Raspuns from "../models/Raspuns";
import FarmacistService from "../services/FarmacistService";
import DatePicker from "react-datepicker";
import"react-datepicker/dist/react-datepicker.css"
import ro from 'date-fns/locale/ro';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const RaspunsSave = forwardRef((props, ref) => {

    //  const { numePacient } = props;
    const {pacientCnp} = props;
    const {farmacieCurenta} = props;

    useImperativeHandle(ref, () => ({
         showRaspunsModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);
         }
    }));

    const [raspuns, setRaspuns] = useState(new Raspuns('', ''));
    //const [farmacieCurenta, setFarmacieCurenta] = useState();

    let numeFarmacie = '';
    
    const [mesaj, setMesaj] = useState('');
    const [pret, setPret] = useState(0);
    const [data, setData] = useState('');
    const [intervalOrar, setIntervalOrar] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);


    const currentUser = useSelector(state => state.user);
    const userId = currentUser?.id;
    const farmacieId = currentUser.farmacieId;
    

      if(farmacieCurenta){
        numeFarmacie = farmacieCurenta.nume;  
        
      }
      console.log("Aici avem numele Farmaciei: " + numeFarmacie)  
    
    useEffect(() => {
        
        setRaspuns(new Raspuns(mesaj,pret,data,intervalOrar,userId,pacientCnp,'', numeFarmacie));
    },[mesaj,pret,data,intervalOrar,pacientCnp,userId, numeFarmacie]);


    // const selectedTrimitere = (e) => {
    //     setTrimitereId(e.target.value);
    //     console.log("Aici avem id-ul selectat din option: " + trimitereId);
    // }


    const saveRaspuns = (e) => {
        e.preventDefault();

        setSubmitted(true);

        // if(!trimitere.serie || !trimitere.numar){
        //     return;
        // }

        FarmacistService.createRaspuns(userId,pacientCnp,raspuns).then(response => {
            props.onSaved(response.data);
            setShow(false);
            setSubmitted(false);
            setSuccessMessage('Înregistrare realizată cu succes');
        }).catch(err => {
            setErrorMessage("Eroare pentru creare Raspuns");
            console.log(err);
        });
    };

    const handleCloseModal = () => {
        setShow(false);
        setSuccessMessage('');
        setErrorMessage('');
    }

    return (
        <Modal show={show}>
            <form onSubmit={(e) => saveRaspuns(e)}
            noValidate
            className={submitted ? 'was-validated' : ''}>

                <div className="modal-header">
                    <h5 className="modal-title">Răspuns</h5>
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
                        {farmacieCurenta &&
                            <div className="form-group">
                            <label htmlFor="farmacie">Farmacie: </label>
                            <input
                                type="text"
                                name="farmacie"
                                //autoComplete="on"
                                // placeholder="ZZ/MM/AAAA"
                                className="form-control"
                                // defaultValue={userFirstName}
                                 value={numeFarmacie}
                                // onChange={(e) => setFarmacieCurenta(e.target.value)}
                                //required
                            />
                            </div>
                        }
                        
                    
                    <div className="form-group">
                        <label htmlFor="mesaj">Indicații: </label>
                        <textarea
                            name="mesaj"
                            //autoComplete="on"
                            className="form-control"
                            // defaultValue={userFirstName}
                            //value=
                            onChange={(e) => setMesaj(e.target.value)}
                            //required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pret">Preț: </label>
                        <input
                            type="number"
                            min="1"
                            step="any"
                            name="pret"
                            placeholder="Preț"
                            className="form-control"
                            
                            onChange={(e) => setPret(e.target.value)}
                            //required
                        />
                    </div>

                    {/* <div className="form-group"> */}
                        <div className="wrapper-inline" >
                            <label   htmlFor="data">Data recomandată de ridicare: </label>
                            <DatePicker 
                                // style={{marginRight: '300px'}}
                                id="data"
                                selected={data}
                                onChange={date => setData(date)}
                                locale={ro}
                            />
                        </div>
                        {/* <input
                            type="text"
                            name="data"
                            //autoComplete="on"
                            placeholder="ZZ/MM/AAAA"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setData(e.target.value)}
                            //required
                        /> */}
                    {/* </div> */}


                    <div className="form-group">
                        <label htmlFor="intervalOrar">Ora recomandată  de ridicare: </label>
                        <TimePicker 
                            id="intervalOrar"
                            // label="Ora recomandatăd de ridicare:"
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


                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => handleCloseModal()}>Închide</button>
                    <button type="submit" className="btn btn-primary">Salvează</button>
                </div>
            </form>
        </Modal>
    );
});

export {RaspunsSave};

