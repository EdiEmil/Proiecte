import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import AdminService from "../services/AdminService";
import DoctorService from "../services/DoctorService";
import Doctor from '../models/Doctor';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../redux-store/actions/user";
import FarmacistService from "../services/FarmacistService";
import {RaspunsSave} from '../templates/RaspunsSave'
import Raspuns from "../models/Raspuns";
import { PrescriereView } from "../templates/PrescriereView";
import Prescriere from "../models/Prescriere";

const FarmacistPage = () => {

    const [doctorList, setDoctorList] = useState([]);

    // const [farmacieCurenta, setFarmacieCurenta] = useState([]);
    const [prescriereList, setPrescriereList] = useState([]);
    const [farmacieCurenta, setFarmacieCurenta] = useState();
    const [raspunsList, setRaspunsList] = useState([]);
    const [selectedRaspuns, setSelectedRaspuns] = useState(new Raspuns('','',''));
    const [prescriereDeAfisat, setPrescriereDeAfisat] = useState(new Prescriere());
    const [selectedPacientCnp, setSelectedPacientCnp] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [statusButton, setStatusButton] = useState(false);
    //const [selectedDoctor, setSelectedDoctor] = useState(new Doctor('','','','','',''));

    const dispatch = useDispatch();
    const saveComponent = useRef();
    const viewComponent = useRef();

    const currentUser = useSelector(state => state.user);
    const numeFarmacie = currentUser?.numeFarmacie;
    const orasFarmacie = currentUser?.orasFarmacie;
    const stradaFarmacie = currentUser?.stradaFarmacie;
    const numarFarmacie = currentUser?.nrFarmacie;
    const farmacieId = currentUser?.farmacieId;
    //console.log("caut acets nume de farmacie: " + stradaFarmacie);

    useEffect(() => {
        //if(!statusButton){
        // FarmacistService.getFarmacieByNumeAndOrasAndStradaAndNumar(numeFarmacie, orasFarmacie, stradaFarmacie, numarFarmacie).then((response) => {
        //     setFarmacieCurenta(response.data);
        //     console.log("Get farmacie curenta: " + response.data);
        // }).catch((error) => {
        //     console.log(error);
        // })
        // if(farmacieCurenta.length > 0){
            FarmacistService.getPrescriereByFarmacieId(farmacieId).then((response) => {
                // const element = response.data[0];
                setPrescriereList(response.data);
                console.log("Acest id il caut acum: " + farmacieId);
            });
        // }
        //}
    }, []);

    useEffect(() => {
        FarmacistService.getFarmacieById(farmacieId).then((response) => {
            setFarmacieCurenta(response.data);
        })

    },[])

    const createRaspuns = (pacientCnp) => {
        setSelectedRaspuns(new Raspuns('',''));
        setSelectedPacientCnp(pacientCnp);
        saveComponent.current?.showRaspunsModal();
    }

    const viewPrescriere = (id) => {

        FarmacistService.getPrescriereById(id).then((response) =>{
            setPrescriereDeAfisat(response.data);
            viewComponent.current?.showPrescriereViewModal();
        }).catch((error) => {
            console.log("Eroare pt getPrescriereById, Farmacist Page: " + error);
        })
    }

    const saveRaspunsWatcher = (raspuns) => {
        let itemIndex = raspunsList.findIndex(item => item.id === raspuns.id);
  
        if (itemIndex !== -1) {
            const newList = raspunsList.map((item) => {
                if (item.id === raspuns.id) {
                    return raspuns;
                }
                return item;
            });
            setRaspunsList(newList);
        } else {
            const newList = raspunsList.concat(raspuns);
            setRaspunsList(newList);
        }
    };

    return (
        <div>
            <div className="container mt-5 mx-8 container-pad">
                <div className="pt-4 mx-5">

                    {errorMessage &&
                        <div className="alert alert-danger">
                            {errorMessage}
                        </div>
                    }

                    <div className="card ms-auto me-auto p-3 shadow-lg" style={{width:'1000px'}}>
                        <div className="card-header">

                            <div className="row">
                                <div className="col-6">
                                    <h3>Prescrieri primite</h3>
                                </div>

                            </div>

                            <div className="card-body">
                                <table className="table table-striped">

                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Serie</th>
                                            <th scope="col">Numar</th>
                                            <th scope="col">Nume</th>
                                            <th scope="col">Prenume</th>
                                            <th scope="col">CNP</th>
                                            <th scope="col">Vizualizare</th>
                                            <th scope="col">Creeare Răspuns</th>
                                        </tr>
                                    </thead>
                                    
                                        <tbody>
                                           

                                            {prescriereList.map((prescriere, ind) =>
                                                <tr key={prescriere.id}>
                                                    <th scope="row">{ind + 1}</th>
                                                    <td>{prescriere.serie}</td>
                                                    <td>{prescriere.numar}</td>
                                                    <td>{prescriere.nume}</td>
                                                    <td>{prescriere.prenume}</td>
                                                    <td>{prescriere.cnp}</td>
                                                    <td>
                                                        <button className="btn btn-primary" value={prescriere.id} onClick={() => viewPrescriere(prescriere.id)}>Prescriere</button>
                                                    </td>
                                                    <td>
                                                    <button className="btn btn-primary me-1" value={prescriere.cnp} onClick={() => createRaspuns(prescriere.cnp)}>Răspuns</button> 
                                                    </td>
                                                </tr>
                                            )}

                                        </tbody>
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                    <RaspunsSave ref={saveComponent} pacientCnp={selectedPacientCnp} farmacieCurenta={farmacieCurenta} raspuns={selectedRaspuns} onSaved={(p) => saveRaspunsWatcher(p)} />
                    <PrescriereView ref={viewComponent}  prescriereDeAfisat={prescriereDeAfisat} onShow={(id) => viewPrescriere(id)} />
                </div>
            </div>
        </div>
    )
}

export default FarmacistPage;