import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FarmacistService from "../services/FarmacistService";

const ProfileFarmacistPage = () => {

    const [farmacistDetails, setFarmacistDetails] = useState([]);

    const currentUser = useSelector(state => state.user);
    const farmacistId = currentUser?.id;
    const institutie = currentUser.institutie;


    useEffect(() => {
        FarmacistService.getFarmacistById(farmacistId).then((response) => {
            setFarmacistDetails(response.data);
            console.log(farmacistDetails);
        }).catch((error) => {
            console.log(error);
        });
    }, []);




    return (
        <div className="container d-flex justify-content-center align-items-center" style={{height: '100vh', maxWidth:'800px'}}>
            <div className="card shadow p-4">
                <div className="card-body">
            <h2 className="text-center mb-4" style={{fontSize: '40px'}}>Pagină de Profil</h2>
            <div>
                {farmacistDetails.map((user) =>
                    <div>
                        <p className="text-center" style={{fontSize:'28px'}}>Username: {user.username}</p>
                        <p className="center" style={{fontSize:'28px'}}>Prenume: {user.firstName}</p>
                        <p className="center" style={{fontSize:'28px'}}>Nume: {user.lastName}</p>
                        <p className="center" style={{fontSize:'28px'}}>Rol: {user.role}</p>
                        <p className="center" style={{fontSize:'28px'}}>CNP: {user.cnp}</p>
                        <p className="center" style={{fontSize:'28px'}}>Farmacie: {user.institutie}</p>
                    </div>
                )}
            </div>
        </div>
        </div>
        </div>

    )
}
export default ProfileFarmacistPage;