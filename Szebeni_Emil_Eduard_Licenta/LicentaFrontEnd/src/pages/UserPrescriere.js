import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserService from "../services/UserService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCableCar } from "@fortawesome/free-solid-svg-icons";
import { TrimitereView } from "../templates/TrimitereView";
import { PrescriereView } from "../templates/PrescriereView";

const UserPrescriere = () => {

    const [userPrescriere, setUserPrescriere] = useState([]);
    const [infoMessage, setInfoMessage] = useState('');
    const [prescriereDeAfisat, setPrescriereDeAfisat] = useState();

    const [idButton, setIdButton] = useState();

    const currentUser = useSelector(state => state.user);
    const userCnp = currentUser?.cnp;


    const viewComponent = useRef();

    useEffect(() => {
        UserService.getPrescriereByPacientCnp(userCnp).then((response) => {
            setUserPrescriere(response.data);
            console.log(userCnp);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const viewPrescriere = (prescriereDeAfisat) => {

    }
 
    const handleClick = (id) => {
        setIdButton(id);

        UserService.getPrescriereById(id).then((response) => {
            setPrescriereDeAfisat(response.data);
            console.log("asta caut: " + response.data);
            viewComponent.current?.showPrescriereViewModal();
            //console.log(prescriereDeAfisat);
        }).catch((error) => {
            console.log("Eroare pt getPrescriereById: " + error);
        })
    }

    return (
        <div className="conatiner p-3" style={{marginTop: '35px'}}>
            {infoMessage &&
                <div className="alert alert-success">
                    {infoMessage}
                </div>
            }

            <div className="d-flex flex-wrap">
                {userPrescriere.map((prescriere) => 
                   <div> 
                    <div className="card m-3" style={{width:'295px'}}>
                        <div className="card-body" style={{padding: '10px'}}>
                            <h4 className="card-title text-uppercase">{prescriere.serie}-{prescriere.numar}</h4>
                            <h6 className="card-subtitle mb-2 text-muted ">{prescriere.numar}</h6>
                        </div>

                        {/* <FontAwesomeIcon icon={faCableCar} className="ms-auto me-auto"/> */}

                        <div className="row mt-2 p-3">
                            {/* <div className="col-6 mt-2 ps-4">
                                {prescriere.nume}
                            </div> */}
                            <div className="col-6">
                                <button className="btn btn-outline-success w-100" value={prescriere.id} onClick={() => handleClick(prescriere.id)}>
                                    Vizualizare Prescriere
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                <PrescriereView ref={viewComponent}  prescriereDeAfisat={prescriereDeAfisat} onShow={(id) => handleClick(id)} />
            </div>
            <div>
                {/* {prescriereDeAfisat && 
                    <h2>Selected Id: {prescriereDeAfisat.serie}</h2>
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
export default UserPrescriere;