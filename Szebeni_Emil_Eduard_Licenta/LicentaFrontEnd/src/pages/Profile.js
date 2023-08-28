import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserService from "../services/UserService";

const ProfilePage = () => {

    const [userDetails, setUserDetails] = useState([]);

    const currentUser = useSelector(state => state.user);
    const userId = currentUser?.id;


    useEffect(() => {
        UserService.getUserById(userId).then((response) => {
            setUserDetails(response.data);
            console.log(userDetails);
        }).catch((error) => {
            console.log(error);
        });
    }, []);




    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh', maxWidth:'800px'}}>
            <div className="card shadow p-4">
                <div className="card-body">
            <h2 className="text-center mb-4" style={{fontSize: '40px'}}>Pafină de Profil</h2>
            <div>
                {userDetails.map((user) =>
                    <div>
                        <p className="text-center" style={{fontSize: '28px'}}>Username: {user.username}</p>
                        <p className="center" style={{fontSize: '28px'}}>Prenume: {user.firstName}</p>
                        <p className="center" style={{fontSize: '28px'}}>Nume: {user.lastName}</p>
                        {user.role === 'USER' &&
                            <p className="center" style={{fontSize: '28px'}}>Rol: Pacient</p>
                        }
                        
                        <p className="center" style={{fontSize: '28px'}}>CNP: {user.cnp}</p>
                        <p className="center" style={{fontSize: '28px'}}>Numele medicului de familie: {user.numeDoctorFamilie}</p>
                        {/* <p className="center" style={{fontSize: '28px'}}>Prenumele medicului de familie: {user.prenume_doctor_familie}</p> */}
                    </div>
                )}
            </div>
            </div>
            </div>
        </div>

    )
}
export default ProfilePage;