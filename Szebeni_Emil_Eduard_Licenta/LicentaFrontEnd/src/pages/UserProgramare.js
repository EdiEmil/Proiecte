import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserService from "../services/UserService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCableCar } from "@fortawesome/free-solid-svg-icons";
import { TrimitereView } from "../templates/TrimitereView";
import Programare from "../models/Programare";
import { ProgramareSave } from '../templates/ProgramareSave';

const UserProgramare = () => {

    // const [selectedProgramare, setSelectedProgramare] = useState(new Programare('','',''));
    const [userTrimitere, setUserTrimitere] = useState([]);
    const [programareList, setProgramareList] = useState([]);
    const [infoMessage, setInfoMessage] = useState('');
    const [programare, setProgramare] = useState(new Programare('', '', ''));

    const [idButton, setIdButton] = useState();

    const currentUser = useSelector(state => state.user);
    const userId = currentUser?.id;
    const numePacient = currentUser?.lastName;
    const prenumePacient = currentUser?.firstName;
    const cnpPacient = currentUser?.cnp;


    const viewComponent = useRef();
    const saveComponent = useRef();

    useEffect(() => {
        UserService.getProgramareByPacientId(userId).then((response) => {
            setProgramareList(response.data);
            //console.log(userDetails);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    // const viewTrimitere = (trimitereDeAfisat) => {

    // }

    const createProgramare = () => {
        setProgramare(new Programare('','','','','','','','','','','','','','','',''));
        saveComponent.current?.showProgramareModal();
    };

    const saveProgramareWatcher = (programare) => {
        let itemIndex = programareList.findIndex(item => item.id === programare.id);

        if (itemIndex !== -1) {
            const newList = programareList.map((item) => {
                if (item.id === programare.id) {
                    return programare;
                }
                return item;
            });
            setProgramareList(newList);
        } else {
            const newList = programareList.concat(programare);
            setProgramareList(newList);
        }
    };

    return (
        <div className="conatiner p-3" style={{marginTop: '35px'}}>
            {infoMessage &&
                <div className="alert alert-success">
                    {infoMessage}
                </div>
            }

            <div className="col-6 " style={{marginTop: '27px', marginLeft:'18px'}}>
                <button className="btn btn-primary" onClick={() => createProgramare()}>
                    Creează o programare
                </button>
            </div>

            <div className="d-flex flex-wrap">
                {programareList.map((programare) =>
                    <div>
                        <div className="card m-3" style={{width: '280px'}}>
                        <div className="card-body" style={{padding: '10px'}}>
                            <div className="card-title ">Nume medic: {programare.numeDoctor}</div>
                            <div className="card-title ">Prenume medic: {programare.prenumeDoctor}</div>
                            <p className="card-subtitle mb-2 text-muted">Oraș: {programare.oras}</p>
                            <p className="card-subtitle mb-2 text-muted">Spital: {programare.spital}</p>
                            <p className="card-subtitle mb-2 text-muted">Secție: {programare.sectie}</p>
                            <p className="card-subtitle mb-2 text-muted">Dată: {programare.dataProgramare}</p>
                            <p className="card-subtitle mb-2 text-muted">Oră: {programare.intervalOrar}</p>
                        </div>

                        {/* <FontAwesomeIcon icon={faCableCar} className="ms-auto me-auto" /> */}

                        {/* <div className="row mt-2 p-3">
                            <div className="col-6 mt-2 ps-4">
                                {programare.numeDoctor}
                                {programare.trimitere}
                            </div> */}
                            {/* <div className="col-6">
                                <button className="btn btn-outline-success w-100" value={trimitere.id} onClick={() => handleClick(trimitere.id)}>
                                    Vizualizare Trimitere
                                </button>
                            </div> */}
                        {/* </div> */}
                    </div>
                    </div>
                )}

                <ProgramareSave ref={saveComponent} numePacient={numePacient} prenumePacient={prenumePacient} cnpPacient={cnpPacient} programare={programare} onSaved={(p) => saveProgramareWatcher(p)} />
            </div>
            {/* <div>
                {trimitereDeAfisat &&
                    <h2>Selected Id: {trimitereDeAfisat.serie}</h2>
                }

            </div> */}

            {/* <h2>Profile Page</h2>
            <div>
                {userTrimitere.map((trimitere) =>
                    <div>
                        <p className="center"> {trimitere.serie}</p>
                        <p className="center"> {trimitere.numar}</p>
                        <p className="center"> {trimitere.nume}</p>
                    </div>
                )}
            </div> */}
        </div>

    )
}
export default UserProgramare;