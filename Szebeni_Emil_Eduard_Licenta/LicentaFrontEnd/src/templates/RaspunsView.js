import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import Trimitere from '../models/Trimitere';
import DoctorService from '../services/DoctorService';
import { Modal } from "react-bootstrap";
import { useRef } from "react";
import UserService from "../services/UserService";
import Programare from "../models/Programare";

const RaspunsView = forwardRef((props, ref) => {

    
    const { raspunsDeAfisat } = props;

    const [idButton, setIdButton] = useState();

    useImperativeHandle(ref, () => ({
         showRaspunsViewModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);
         }
    }));

    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);


    // const saveTrimitere = (e) => {
    //     e.preventDefault();

    //     //setSubmitted(true);

    //     // if(!trimitere.serie || !trimitere.numar){
    //     //     return;
    //     // }

    //     UserService.getTrimitereById(idButton).then(response => {
    //         props.onSaved(response.data);
    //         setShow(true);
    //         //setSubmitted(false);
    //     }).catch(err => {
    //         setErrorMessage("Eroare pentru vizualizare Trimitere");
    //         console.log(err);
    //     });
    // };

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
                {/* onSubmit={(e) => saveTrimitere(e)} */}
            <form 
            noValidate
            className={submitted ? 'was-validated' : ''}>

                <div className="modal-header">
                        <h5 className="modal-title">Răspuns de la farmacie</h5>
                    <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                </div>

                <div className="modal-body">

                    {errorMessage &&
                    <div className="alert alert-danger">
                        {errorMessage}
                    </div>
                    }

                        {/* aici unde am value trebuie sa fac ca la regisrter unde nu folosim value si sa setes setSerie cu valoarea primita din props  */}
                    <div className="form-group">
                       { raspunsDeAfisat &&
                        <div>
                            
                                <div className="wrapper-sex">
                                    <h5 className="card-title text-uppercase">Farmacia: {raspunsDeAfisat.numeFarmacie}</h5> 
                                    <h5 className="card-title text-uppercase" style={{marginLeft: 'auto'}}> Adresa: {raspunsDeAfisat.numar}</h5>
                                </div>
                                <p style={{marginTop:'10px'}}>Indicațile farmacistului: <span style={{textDecoration: "underline"}}>{raspunsDeAfisat.mesaj}</span></p>
                                <p>Prețul medicamentelor: {raspunsDeAfisat.pret}</p>
                                <div className="wrapper-sex">
                                    <p>Data recomandată: {raspunsDeAfisat.data}</p>
                                    <p style={{marginLeft: 'auto'}}>Intervalul orar recomandat: {raspunsDeAfisat.intervalOrar}</p>
                                </div>
                                <p className="card-subtitle mb-2 text-muted">Data și ora la care a fost primit răspunsul: {raspunsDeAfisat.createTime}</p>
                               
                        </div>
                        }       
                    </div>                   
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Închide</button>
                </div>
            </form>
        </Modal>
    );
});

export {RaspunsView};