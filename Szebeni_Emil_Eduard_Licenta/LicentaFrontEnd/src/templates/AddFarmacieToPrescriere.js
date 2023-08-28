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
import { useSelector } from "react-redux";


const NUMBERS_ONLY = /^[0-9]+$/;

const AddFarmacieToPrescriere = forwardRef((props, ref) => {

    // const { userFirstName } = props;
    // console.log("Aici avem numele din Modal: " + userFirstName);

    const { farmacieSelectata } = props;
    const { farmacieId } = props;
    const [idButton, setIdButton] = useState();

    

    useImperativeHandle(ref, () => ({
        showAddFarmacieToPrescriereModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);
        }
    }));

    const [trimitere, setTrimitere] = useState(new Programare('', ''));

    const [dropDownPrescriere, setDropDownPrescriere] = useState([]);
    const [prescriereId, setPrescriereId] = useState();

    // useEffect(() => {
    //     setTrimitere(props.trimitere);
    // }, [props.trimitere]);


    const [serie, setSerie] = useState('');
    const [numar, setNumar] = useState('');
    const [nume, setNume] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [succesMessage, setSuccesMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

    const [validSelect, setValidSelect] = useState(false);

    const currentUser = useSelector(state => state.user);
    const userCnp = currentUser?.cnp;

    const selectedPrescriere = (e) => {
        setPrescriereId(e.target.value);
        //console.log("Aici avem id-ul selectat din option: " + trimitereId);
    }

    useEffect(() => {
        UserService.getPrescriereByPacientCnp(userCnp).then(response => {
            setDropDownPrescriere(response.data);
        })
    },[])
    // useEffect(() => {

    //     setTrimitere(new Trimitere(serie,numar,'','','','','','','','','','','','','',userFirstName));
    // },[serie,numar, userFirstName]);

    const saveTrimitere = (e) => {
        e.preventDefault();

        setSubmitted(true);
        // cod care functioneaza la fel dar in consola nu da o eroare
        // UserService.updatePrescriereToAddFarmacie(prescriereId,farmacieId).then(_ => {
        //     setShow(true);
        // }).catch(err => {
        //     setErrorMessage("Eroare pentru vizualizare Trimitere");
        //     console.log(err);
        // });
    

        UserService.updatePrescriereToAddFarmacie(prescriereId,farmacieId).then(response => {
            props.onUpdate(response.data);
            setShow(true);
            setSubmitted(false);
            setSuccesMessage('Înregistrare realizată cu succes');
        }).catch(err => {
            setErrorMessage("Eroare pentru vizualizare Trimitere");
            console.log(err);
        });
    };

    const handleCloseModal = () => {
        setShow(false);
        setSuccesMessage('');
        setErrorMessage('');
        setPrescriereId();
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
        const result = NUMBERS_ONLY.test(prescriereId);
        setValidSelect(result);
    },[prescriereId])

    return (
        <Modal show={show}>
            <form onSubmit={(e) => saveTrimitere(e)}
                >

                <div className="modal-header">
                    <h5 className="modal-title">Trimite o prescriere</h5>
                    <button type="button" className="btn-close" onClick={() => handleCloseModal()}></button>
                </div>

                <div className="modal-body">
                    {succesMessage &&
                    <div className="alert alert-success">{succesMessage}</div>
                    }
                    {errorMessage &&
                        <div className="alert alert-danger">
                            {errorMessage}
                        </div>
                    }

                    {/* aici unde am value trebuie sa fac ca la regisrter unde nu folosim value si sa setes setSerie cu valoarea primita din props  */}
                    <div className="form-group">
                        {farmacieSelectata &&
                            <div>
                                <h4 style={{marginLeft:'13px'}}>Denumire Farmacie: {farmacieSelectata.nume}</h4>
                                <p style={{marginLeft:'13px'}}>Oraș: {farmacieSelectata.oras}</p>
                                <p style={{marginLeft:'13px'}}>Strada: {farmacieSelectata.strada}</p>
                                <p style={{marginLeft:'13px'}}>Număr: {farmacieSelectata.numar}</p>
                            </div>
                        }

                        <div className="form-group">
                            <label htmlFor="Prescriere" >Prescriere: </label>
                            <select onChange={(e) => selectedPrescriere(e)} className="form-selected-control">
                                <option value="">Selectează numărul trimiterii</option>
                                {dropDownPrescriere &&
                                    dropDownPrescriere.map((prescriere) => (
                                        <option key={prescriere.id} value={prescriere.id}>{prescriere.id} </option>

                                    ))
                                }
                            </select>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => handleCloseModal()}>Închide</button>
                    <button type="submit" className="btn btn-primary" disabled={!validSelect ? true : false}>Trimite</button>
                </div>
            </form>
        </Modal>
    );
});

export { AddFarmacieToPrescriere };