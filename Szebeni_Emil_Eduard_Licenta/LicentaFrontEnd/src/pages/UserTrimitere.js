import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserService from "../services/UserService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCableCar } from "@fortawesome/free-solid-svg-icons";
import { TrimitereView } from "../templates/TrimitereView";

const UserTrimitere = () => {

    const [userTrimitere, setUserTrimitere] = useState([]);
    const [infoMessage, setInfoMessage] = useState('');
    const [trimitereDeAfisat, setTrimitereDeAfisat] = useState();

    const [idButton, setIdButton] = useState();

    const currentUser = useSelector(state => state.user);
    const userName = currentUser?.lastName;


    const viewComponent = useRef();

    useEffect(() => {
        UserService.getTrimitereByUserName(userName).then((response) => {
            setUserTrimitere(response.data);
            //console.log(userDetails);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const viewTrimitere = (trimitereDeAfisat) => {

    }

    const handleClick = (id) => {
        setIdButton(id);

        UserService.getTrimitereById(id).then((response) => {
            setTrimitereDeAfisat(response.data);
            viewComponent.current?.showTrimitereViewModal();
            console.log(trimitereDeAfisat);
        }).catch((error) => {
            console.log("Eroare pt getTrimitereById: " + error);
        })
    }

    return (
        <div className="conatiner p-3" style={{ marginTop: '35px' }}>
            {infoMessage &&
                <div className="alert alert-success">
                    {infoMessage}
                </div>
            }

            <div className="d-flex flex-wrap">
                {userTrimitere.map((trimitere) =>
                    <div>
                        <div className="card m-3" style={{ width: '295px' }}>
                            <div className="card-body" style={{ padding: '10px' }}>
                                <h4 className="card-title text-uppercase">{trimitere.serie}-{trimitere.numar}</h4>
                                <h6 className="card-subtitle mb-2 text-muted">{trimitere.dataTrimiterii}</h6>
                                <p className="card-text">{trimitere.catreSpecialitateaClinica}</p>
                                <p className="card-text">Diagnostic: {trimitere.diagnostic}</p>
                                {/* <div className="card-title text-uppercase">{trimitere.numar}</div> */}
                                {/* <div className="card-title text-uppercase">{t}</div> */}
                            </div>

                            {/* <FontAwesomeIcon icon={faCableCar} className="ms-auto me-auto"/> */}

                            <div className="card-text">
                                {/* <p className="col-6 mt-2 ps-4 card-text">
                                    Cod diagnostic: {trimitere.codDiagnostic}
                                </p> */}
                                <div className="card-link" >
                                        <div style={{marginBottom: '20px', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}}>
                                        <button className="btn btn-outline-success w-100 " value={trimitere.id} onClick={() => handleClick(trimitere.id)}>
                                            Vizualizare Trimitere
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <TrimitereView ref={viewComponent} trimitereDeAfisat={trimitereDeAfisat} onShow={(id) => handleClick(id)} />
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
export default UserTrimitere;