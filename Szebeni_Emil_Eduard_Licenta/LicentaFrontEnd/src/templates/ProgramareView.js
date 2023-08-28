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
// nu am schimbat aproape nimic, aici urmeaza sa fie view pt Programare la doctorul spital
const ProgramareView = forwardRef((props, ref) => {

    // const { userFirstName } = props;
    // console.log("Aici avem numele din Modal: " + userFirstName);

    const { trimitereDeAfisat } = props;

    const [idButton, setIdButton] = useState();

    useImperativeHandle(ref, () => ({
         showProgramareViewModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);
         }
    }));

    const [trimitere, setTrimitere] = useState(new Programare('', ''));

    // useEffect(() => {
    //     setTrimitere(props.trimitere);
    // }, [props.trimitere]);

    
    const [serie, setSerie] = useState('');
    const [numar, setNumar] = useState('');
    const [nume, setNume] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

    
    
    // useEffect(() => {
        
    //     setTrimitere(new Trimitere(serie,numar,'','','','','','','','','','','','','',userFirstName));
    // },[serie,numar, userFirstName]);

    const saveTrimitere = (e) => {
        e.preventDefault();

        //setSubmitted(true);

        // if(!trimitere.serie || !trimitere.numar){
        //     return;
        // }

        UserService.getTrimitereById(idButton).then(response => {
            props.onSaved(response.data);
            setShow(true);
            //setSubmitted(false);
        }).catch(err => {
            setErrorMessage("Eroare pentru vizualizare Trimitere");
            console.log(err);
        });
    };

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
                    <h5 className="modal-title">Product Details</h5>
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
                       { trimitereDeAfisat&&
                        <div>
                            <h4>Serie: {trimitereDeAfisat.serie}</h4> 
                            <h4>Numar: {trimitereDeAfisat.numar}</h4>
                            <p>Nume: {trimitereDeAfisat.nume}</p>
                        </div>
                        }       
                        {/* <label htmlFor="serie">Serie: </label>
                        <input
                            type="text"
                            name="serie"
                            autoComplete="on"
                            placeholder="serie"
                            className="form-control"
                            // defaultValue={userFirstName}
                            // value={userFirstName}
                            onChange={(e) => setSerie(e.target.value)}
                            //required
                        />
                        <div className="invalid-feedback">
                           Serie is required.
                        </div> */}
                    </div>

                    {/* <div className="form-group">
                        <label htmlFor="description">Numar: </label>
                        <textarea
                            name="numar"
                            placeholder="numar"
                            className="form-control"
                            value={trimitere.numar}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Numar is required.
                        </div>
                    </div> */}

                    {/* <div className="form-group">
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
                    </div> */}

                    {/* <div className="form-group">
                        <label htmlFor="nume">Nume: </label>
                        <input
                            type="text"
                            name="nume"
                            //autoComplete="on"
                            placeholder={userFirstName}
                            className="form-control"
                            // defaultValue={userFirstName}
                             value={userFirstName}
                            onChange={(e) => setNume(e.target.value)}
                            //required
                        />
                    </div> */}


                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Close</button>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
            </form>
        </Modal>
    );
});

export {ProgramareView};