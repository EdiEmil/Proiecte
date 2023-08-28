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
import FarmacistService from "../services/FarmacistService";
// nu am schimbat aproape nimic, aici urmeaza sa fie view pt Programare la doctorul spital
const AddFarmacieToFarmacist = forwardRef((props, ref) => {

    // const { userFirstName } = props;
    // console.log("Aici avem numele din Modal: " + userFirstName);

    const { farmacieSelectata } = props;
    const { farmacieId } = props;
    const [idButton, setIdButton] = useState();

    useImperativeHandle(ref, () => ({
        showAddFarmacieToFarmacistModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);
        }
    }));

    const [trimitere, setTrimitere] = useState(new Programare('', ''));

    //const [dropDownPrescriere, setDropDownPrescriere] = useState([]);
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

    const currentUser = useSelector(state => state.user);
    //const userCnp = currentUser?.cnp;
    const farmacistId = currentUser.id;

    // const selectedPrescriere = (e) => {
    //     setPrescriereId(e.target.value);
    //     //console.log("Aici avem id-ul selectat din option: " + trimitereId);
    // }

    // useEffect(() => {
    //     UserService.getPrescriereByPacientCnp(userCnp).then(response => {
    //         setDropDownPrescriere(response.data);
    //     })
    // },[])
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
    
        setSuccesMessage('');
       FarmacistService.updateFarmacistWithFarmacie(farmacieId,farmacistId).then(response => {
            props.onUpdate(response.data);
            setShow(true);
            setSubmitted(false);
            setSuccesMessage('Înregistrare realizată cu succes');
        }).catch(err => {
            setErrorMessage("Eroare pentru update Farmacist");
            console.log(err);
        });
    };

    const handleCloseModal = () => {
        setShow(false);
        setSuccesMessage('');
        setErrorMessage('');
    };


    return (
        <Modal show={show} onClose={handleCloseModal} className="custom-modal">
            <form onSubmit={(e) => saveTrimitere(e)}
                noValidate
                className={submitted ? 'was-validated' : ''}>

                <div className="modal-header">
                    <h5 className="modal-title">Detalii Farmacie</h5>
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
                            <div className="text-center">
                                <h4 className="card-title" style={{fontSize:'36px'}}> {farmacieSelectata.nume}</h4>
                                <p className="card-text" style={{fontSize:'28px'}}>Oras: {farmacieSelectata.oras}</p>
                                <p className="card-text" style={{fontSize:'28px'}}>Strada: {farmacieSelectata.strada}</p>
                                <p className="card-text" style={{fontSize:'28px'}}>Număr: {farmacieSelectata.numar}</p>
                            </div>
                        }
                    </div>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => handleCloseModal()}>Inchide</button>
                    <button type="submit" className="btn btn-primary">Salvează noua farmacie</button>
                </div>
            </form>
        </Modal>
    );
});

export { AddFarmacieToFarmacist };