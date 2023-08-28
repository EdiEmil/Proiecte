import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserService from "../services/UserService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCableCar } from "@fortawesome/free-solid-svg-icons";
import { TrimitereView } from "../templates/TrimitereView";
import { PrescriereView } from "../templates/PrescriereView";
import { AddFarmacieToPrescriere } from "../templates/AddFarmacieToPrescriere";
import { RaspunsView } from "../templates/RaspunsView";
import { PopUpDelete } from "../templates/PopUpDelete";

const UserRaspuns = () => {

    //const [farmacii, setFarmacii] = useState([]);
    const [raspunsuri, setRaspunsuri] = useState([]);
    const [raspunsDeAfisat, setRaspunsDeAfisat] = useState();
    const [infoMessage, setInfoMessage] = useState('');
    const [farmacieSelectata, setFarmacieSelectata] = useState([]);
    const [farmacieId, setFarmcieId] = useState();

    const [idButton, setIdButton] = useState();

    const currentUser = useSelector(state => state.user);
    const userCnp = currentUser?.cnp;


    const viewComponent = useRef();
    const updateComponent = useRef();
    const deleteComponent = useRef();

    useEffect(() => {
        UserService.getRaspunsByPacientCnp(userCnp).then((response) => {
            setRaspunsuri(response.data);
            //console.log(userCnp);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const getRaspuns = (id) => {
        setIdButton(id);

        UserService.getRaspunsById(id).then((response) => {
            setRaspunsDeAfisat(response.data);
            viewComponent.current?.showRaspunsViewModal();
        }).catch((error) => {
            console.log("Eroare pt getRaspuns: " + error);
        })
    }
    const deleteRaspunsRequest = (id) => {
        setIdButton(id);
        deleteComponent.current?.showPopUpDeleteModal();
    }

    const deleteRaspuns = () => {
        
        //setIdButton(id);

        UserService.deleteRaspuns(idButton).then((response) => {
            const updatedList = raspunsuri.filter(r => r.id !== idButton);
            setRaspunsuri(updatedList);
        })
    }
    // const handleClick = (id) => {
    //     setIdButton(id);

    //     UserService.getFarmacieById(id).then((response) => {
    //         setFarmacieSelectata(response.data);
    //         setFarmcieId(id);
    //         updateComponent.current?.showAddFarmacieToPrescriereModal();
    //         console.log("Asta este id-ul pe care il caut: " + farmacieSelectata);
    //     }).catch((error) => {
    //         console.log("Eroare pt getPrescriereById: " + error);
    //     });
    // }

    return (
        <div className="conatiner p-3" style={{marginTop:'35px'}}>
            {infoMessage &&
                <div className="alert alert-success">
                    {infoMessage}
                </div>
            }

            <div className="d-flex flex-wrap">
                {raspunsuri.map((raspuns) => 
                   <div> 
                    <div className="card m-3" style={{width:'400px'}}>
                        <div className="card-body">
                            <h4>Răspuns primit de la: {raspuns.numeFarmacie}</h4>
                            {/* <h5>{raspuns.numeFarmacie}</h5> */}
                            {/* <h5 className="card-title text-uppercase">{raspuns.data}</h5>
                            <div className="card-subtitle mb-2 text-muted ">Preț:{raspuns.pret}</div>
                            <div className="card-subtitle mb-2 text-muted ">Mesaj:{raspuns.mesaj}</div> */}
                            <div className="card-subtitle mb-2 text-muted ">Răspunsul a fost primit la:{raspuns.createTime}</div>
                            {/* <div className="card-subtitle mb-2 text-muted ">Număr{farmacie.numar}</div> */}
                        </div>
                        <div style={{marginBottom: '20px'}}>
                        <div className="wrapper-sex">
                                <div style={{marginLeft:'20px'}}>
                                    <button className="btn btn-outline-success w-100" value={raspuns.id} onClick={() => getRaspuns(raspuns.id)}>
                                        Vizualizare Răspuns
                                    </button>
                                </div>
                            
                            <div style={{marginLeft: '50px'}}>
                                <button className="btn btn-outline-danger w-100" style={{marginLeft: 'auto'}} value={raspuns.id} onClick={() => deleteRaspunsRequest(raspuns.id)}>
                                    Șterge Răspuns 
                                </button>
                            </div>
                            </div>
                        </div>
                        {/* <FontAwesomeIcon icon={faCableCar} className="ms-auto me-auto"/> */}

                        {/* <div className="row mt-2 p-3"> */}
                            {/* <div className="col-6 mt-2 ps-4">
                                {farmacie.strada}
                            </div> */}
                            {/* <div className="wrapper-sex">
                                <div>
                                    <button className="btn btn-outline-success w-100" value={raspuns.id} onClick={() => getRaspuns(raspuns.id)}>
                                        Vizualizare Răspuns
                                    </button>
                                </div>
                            
                            <div>
                                <button className="btn btn-outline-danger w-100" style={{marginLeft: 'auto'}} value={raspuns.id} onClick={() => deleteRaspuns(raspuns.id)}>
                                    Șterge
                                </button>
                            </div>
                            </div> */}
                        {/* </div> */}
                        </div>
                    </div>
                )}
                <RaspunsView ref={viewComponent} raspunsDeAfisat={raspunsDeAfisat} onShow={(id) => getRaspuns(id)}/>
                <PopUpDelete ref={deleteComponent} onConfirmed={() => deleteRaspuns()} />
                {/* <AddFarmacieToPrescriere ref={updateComponent}  farmacieId={farmacieId} farmacieSelectata={farmacieSelectata} onUpdate={(id) => handleClick(id)} /> */}
            </div>
            <div>
                {/* {farmacieId && 
                    <h2>Selected Id: {farmacieId}</h2>
                } */}
                
            </div>

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
export default UserRaspuns;