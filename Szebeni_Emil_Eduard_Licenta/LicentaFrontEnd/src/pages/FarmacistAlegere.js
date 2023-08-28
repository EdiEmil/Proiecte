import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserService from "../services/UserService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCableCar } from "@fortawesome/free-solid-svg-icons";
import { TrimitereView } from "../templates/TrimitereView";
import { PrescriereView } from "../templates/PrescriereView";
import { AddFarmacieToPrescriere } from "../templates/AddFarmacieToPrescriere";
import { AddFarmacieToFarmacist } from "../templates/AddFarmacieToFarmacist";

const FarmacistAlegere = () => {

    const [farmacii, setFarmacii] = useState([]);
    const [infoMessage, setInfoMessage] = useState('');
    const [farmacieSelectata, setFarmacieSelectata] = useState([]);
    const [farmacieId, setFarmcieId] = useState();

    const [idButton, setIdButton] = useState();

    const [selectedOption, setSelectedOption] = useState('');
    const [numeFarmacieCautat, setNumeFarmacieCautat] = useState('');
    const [orasFarmacieCautat, setOrasFarmacieCautat] = useState('');
    const [stradaFarmacieCautat, setStradaFarmacieCautat] = useState('');
    const [numarFarmacieCautat,setNumarFarmacieCautat] = useState();

    const currentUser = useSelector(state => state.user);
    const userCnp = currentUser?.cnp;


    const viewComponent = useRef();
    const updateComponent = useRef();

    useEffect(() => {
        UserService.getAllFarmacii().then((response) => {
            setFarmacii(response.data);
            //console.log(userCnp);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const handleSearch = () => {
        if(selectedOption === 'nume' || selectedOption === ''){
            UserService.getFarmacieByNume(numeFarmacieCautat).then((response) => {
                setFarmacii(response.data);
            })
        } else if(selectedOption === 'oras'){
            UserService.getFarmacieByOras(numeFarmacieCautat).then((response) => {
                setFarmacii(response.data);
            })
        } else if(selectedOption === 'numeOras'){
            UserService.getFarmacieByNumeAndOras(numeFarmacieCautat, orasFarmacieCautat).then((response) => {
                setFarmacii(response.data);
            })
        } else if(selectedOption === 'numeStrada'){
            UserService.getFarmacieByNumeAndStrada(numeFarmacieCautat, stradaFarmacieCautat).then((response) => {
                setFarmacii(response.data);
            })
        } else if( selectedOption === 'numeOrasStrada'){
            UserService.getFarmacieByNumeAndOrasAndStrada(numeFarmacieCautat, orasFarmacieCautat, stradaFarmacieCautat).then((response) => {
                setFarmacii(response.data);
            })
        } else if( selectedOption === 'numeOrasStradaNumar'){
            UserService.getFarmacieByNumeAndOrasAndStradaAndNumar(numeFarmacieCautat, orasFarmacieCautat, stradaFarmacieCautat, numarFarmacieCautat).then((response) => {
                setFarmacii(response.data);
            }).catch((error) => {
                console.log("Eroare pt get Farmacie: " + error);
            }) 
        }

       
        console.log('Numele cautate' + numeFarmacieCautat);
    }

    const handleClick = (id) => {
        setIdButton(id);

        UserService.getFarmacieById(id).then((response) => {
            setFarmacieSelectata(response.data);
            setFarmcieId(id);
            updateComponent.current?.showAddFarmacieToFarmacistModal();
            console.log("Asta este id-ul pe care il caut: " + farmacieSelectata);
        }).catch((error) => {
            console.log("Eroare pt getPrescriereById: " + error);
        });
    }

    return (
        <div className="conatiner p-3" style={{marginTop: '35px'}}>
            
            <div className="wrapper-sex">
            <div style={{display:'flex',  top: '20px', left: '20px'}}>
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option value='nume'>Nume</option>
                    <option value='oras'>Oraș</option>
                    <option value='numeOras'>Nume și Oraș</option>
                    <option value='numeStrada'>Nume și Stradă</option>
                    <option value='numeOrasStrada'>Nume,Oraș și Stradă</option>
                    <option value='numeOrasStradaNumar'>Nume,Oraș,Stradă și Număr</option>
                </select>
            </div>
            <div style={{marginRight:'100px'}}>
            {(selectedOption === 'nume' || selectedOption === '' || selectedOption === 'oras') &&
            <div className="input-group" style={{display:'flex'}}>
                <div className="form-outline">
                    <input type="search" id="form1" className="form-control" placeholder="Nume" value={numeFarmacieCautat} onChange={(e) => setNumeFarmacieCautat(e.target.value)}/>
                    {/* <label className="form-label" for="form1">Căutare</label> */}
                </div>
                <button type="button" className="btn btn-primary" style={{height: '100%'}} onClick={handleSearch}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            }

            {(selectedOption === 'numeOras') &&
            <div className="input-group" style={{display:'flex'}}>
                <div className="form-outline" style={{display:'flex'}}>
                    <input type="search" id="form1" className="form-control" placeholder="Nume" value={numeFarmacieCautat} onChange={(e) => setNumeFarmacieCautat(e.target.value)}/>
                    <input type="search" id="form1" className="form-control" placeholder="Oraș" value={orasFarmacieCautat} onChange={(e) => setOrasFarmacieCautat(e.target.value)}/>
                    {/* <label className="form-label" for="form1">Căutare</label> */}
                </div>
                <button type="button" className="btn btn-primary" style={{height: '100%'}} onClick={handleSearch}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            }

            {(selectedOption === 'numeStrada') &&
            <div className="input-group" style={{display:'flex'}}>
                <div className="form-outline" style={{display:'flex'}}>
                    <input type="search" id="form1" className="form-control" placeholder="Nume" value={numeFarmacieCautat} onChange={(e) => setNumeFarmacieCautat(e.target.value)}/>
                    <input type="search" id="form1" className="form-control" placeholder="Stradă" value={stradaFarmacieCautat} onChange={(e) => setStradaFarmacieCautat(e.target.value)}/>
                    {/* <label className="form-label" for="form1">Căutare</label> */}
                </div>
                <button type="button" className="btn btn-primary" style={{height: '100%'}} onClick={handleSearch}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            }

            {(selectedOption === 'numeOrasStrada') &&
            <div className="input-group" style={{display:'flex'}}>
                <div className="form-outline" style={{display:'flex'}}>
                    <input type="search" id="form1" className="form-control" placeholder="Nume" value={numeFarmacieCautat} onChange={(e) => setNumeFarmacieCautat(e.target.value)}/>
                    <input type="search" id="form1" className="form-control" placeholder="Oraș" value={orasFarmacieCautat} onChange={(e) => setOrasFarmacieCautat(e.target.value)}/>
                    <input type="search" id="form1" className="form-control" placeholder="Stradă" value={stradaFarmacieCautat} onChange={(e) => setStradaFarmacieCautat(e.target.value)}/>
                    {/* <label className="form-label" for="form1">Căutare</label> */}
                </div>
                <button type="button" className="btn btn-primary" style={{height: '100%'}} onClick={handleSearch}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            }

        {(selectedOption === 'numeOrasStradaNumar') &&
            <div className="input-group" style={{display:'flex'}}>
                <div className="form-outline" style={{display:'flex'}}>
                    <input type="search" id="form1" className="form-control" placeholder="Nume" value={numeFarmacieCautat} onChange={(e) => setNumeFarmacieCautat(e.target.value)}/>
                    <input type="search" id="form1" className="form-control" placeholder="Oraș" value={orasFarmacieCautat} onChange={(e) => setOrasFarmacieCautat(e.target.value)}/>
                    <input type="search" id="form1" className="form-control" placeholder="Stradă" value={stradaFarmacieCautat} onChange={(e) => setStradaFarmacieCautat(e.target.value)}/>
                    <input type="search" id="form1" className="form-control" placeholder="Număr" value={numarFarmacieCautat} onChange={(e) => setNumarFarmacieCautat(e.target.value)}/>
                    {/* <label className="form-label" for="form1">Căutare</label> */}
                </div>
                <button type="button" className="btn btn-primary" style={{height: '100%'}} onClick={handleSearch}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            }
            </div>
        </div>

            {infoMessage &&
                <div className="alert alert-success">
                    {infoMessage}
                </div>
            }

            <div className="d-flex flex-wrap">
                {farmacii.map((farmacie) => 
                   <div> 
                    <div className="card m-3" style={{width: '295px'}}>
                        <div className="card-body" style={{padding:'10px'}}>
                            <h5 className="card-title text-uppercase">{farmacie.nume}</h5>
                            <div className="card-subtitle mb-2 text-muted">Oraș:{farmacie.oras}</div>
                            <div className="card-subtitle mb-2 text-muted">Stradă:{farmacie.strada}</div>
                            <div className="card-subtitle mb-2 text-muted">Număr:{farmacie.numar}</div>
                        </div>

                        {/* <FontAwesomeIcon icon={faCableCar} className="ms-auto me-auto"/> */}

                        <div className="row mt-2 p-3">
                            <div className="col-6 mt-2 ps-4">
                                {farmacie.strada}
                            </div>
                            <div className="col-6">
                                <button className="btn btn-outline-success w-100" value={farmacie.id} onClick={() => handleClick(farmacie.id)}>
                                    Alege Farmacia!
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                <AddFarmacieToFarmacist ref={updateComponent}  farmacieId={farmacieId} farmacieSelectata={farmacieSelectata} onUpdate={(id) => handleClick(id)} />
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
export default FarmacistAlegere;