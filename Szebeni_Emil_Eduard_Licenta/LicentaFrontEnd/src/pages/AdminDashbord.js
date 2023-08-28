import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AdminService from "../services/AdminService";
import DoctorService from "../services/DoctorService";
import Doctor from '../models/Doctor';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../redux-store/actions/user";

const AdminDashbord = () => {
   
   const [doctorList, setDoctorList] = useState([]);
   const [farmacistList, setFarmacistList] = useState([]);
   const [errorMessage, setErrorMessage] = useState('');
   const [successMessage, setSuccessMessage] = useState('')
   const [statusButton, setStatusButton] = useState(false);
   //const [selectedDoctor, setSelectedDoctor] = useState(new Doctor('','','','','',''));

   const dispatch = useDispatch();

   const currentUser = useSelector(state => state.user);

   useEffect(() => {
      if(!statusButton){
         AdminService.getAllUnapprovedDoctors().then((response) => {
            setDoctorList(response.data);
            //console.log(doctorList);
           });
      }else{
         AdminService.getAllUnapprovedFarmacisti().then((response) => {
            setDoctorList(response.data);
         });
      }
     
   }, [statusButton]);


   const approveDoctor = (doctor) => {

      AdminService.approveDoctor(doctor).then((response) => {
         const updatedList = doctorList.filter(d => d.id !== doctor.id);
         setDoctorList(updatedList);
         console.log(response);
         setSuccessMessage('Aprobare realizată cu succes')
      }).catch((error) => {
         setErrorMessage("Eroare pentru approve Doctor");
         console.log(error);
      });
   };

   const changeRole = (doctor) => {
      AdminService.changeRole(doctor.id).then((response) => {
         //const updatedList = doctorList.filter(d => d.id  !== doctor.id);
         // setDoctorList(response.data);
         setSuccessMessage("Rolul a fost schimbat cu succes");
      }).catch((error) => {
         setErrorMessage("Eroare pentru update Role Doctor");
         console.log(error);
      });
   }

   // const target = document.getElementById("alertDiv");
   // window.onload = setInterval(() => target.style.opacity = '0', 2000)

   const approveFarmacist = (farmacist) => {

      AdminService.approveFarmacist(farmacist).then((response) => {
        const updatedList = doctorList.filter(d => d.id !== farmacist.id);
        setDoctorList(updatedList);
         console.log(response);
         setSuccessMessage('Aprobare realizată cu succes')
      }).catch((error) => {
         setErrorMessage("Eroare pentru approve Farmacist");
         console.log(error);
      });
   };

   const deleteDoctor = (doctor) => {
      AdminService.deleteDoctor(doctor.id).then((response) => {
         const updatedList = doctorList.filter(d => d.id !== doctor.id);
         setDoctorList(updatedList);
         setSuccessMessage('Utilizator șters cu succes');
      }).catch((error) => {
         setErrorMessage("Eroare pentru stergere doctor");
         console.log(error);
      });
   };

   const deleteFarmacist = (farmacist) => {
      AdminService.deleteFarmacist(farmacist.id).then((response) => {
         const updatedList = doctorList.filter(f => f.id !== farmacist.id);
         setDoctorList(updatedList);
         setSuccessMessage("Utilizator șters cu succes");
      }).catch((error) => {
         setErrorMessage("Eroare pentru ștergere farmacist");
         console.log(error);
      })
   }

   useEffect(() => {
      if(successMessage) {
         const timeout = setTimeout(() => {
            setSuccessMessage('');
         }, 4000);
         return () => clearTimeout(timeout);
      }

      if(errorMessage) {
         const timeout = setTimeout(() => {
            setErrorMessage('');
         },4000);
         return () => clearTimeout(timeout);
      }
   },[successMessage, errorMessage]);

   
   return(
      <div>
         <div className="container mt-5 mx-8 container-pad">
            <div className="pt-4 mx-5">

               {successMessage &&
                  <div id='alertDiv' className="alert alert-success">{successMessage}</div>
               } 

               {errorMessage && 
                  <div className="alert alert-danger">
                     {errorMessage}
                  </div> 
               }

               <div className="card ms-auto me-auto p-3 shadow-lg custom-table" style={{width:'1300px'}}>
                  <div className="card-header">

                     <div className="row">
                        <div className="col-6">
                           {!statusButton && <h3>Doctori neaprobați</h3>} 
                           {statusButton && <h3>Farmaciști neaprobați</h3>}
                        </div>

                        <div className="col-6 text-end">
                           {!statusButton && 
                              <button className="btn btn-primary" onClick={() => {setStatusButton(true)}}>
                              Farmacisti
                           </button>
                           }
                           {statusButton &&
                              <button className="btn btn-primary" onClick={() => {setStatusButton(false)}}>
                                 Doctori
                              </button>
                           }
                           
                        </div>
                     </div>

                     <div className="card-body" >
                        <table className="table table-striped">
                           
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">Username</th>
                                 <th scope="col">Nume</th>
                                 <th scope="col">Prenume</th>
                                 <th scope="col">CNP</th>
                                 <th scope="col">Institutie</th>
                                 <th scope="col">Actiune</th>
                              </tr>
                           </thead>

                           <tbody>
                              {doctorList.map((doctor,ind) => 
                                 <tr key={doctor.id}>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{doctor.username}</td>
                                    <td>{doctor.lastName}</td>
                                    <td>{doctor.firstName}</td>
                                    <td>{doctor.cnp}</td>
                                    <td>{doctor.institutie}</td>
                                    <td>
                                       {!statusButton && 
                                       <div className="wrapper-sex">
                                          <button className="btn btn-primary me-1" onClick={() => approveDoctor(doctor)}>Aprobă</button> 
                                 
                                          <button className="btn btn-primary me-2" onClick={() => changeRole(doctor)}>Schimbă Rol</button>

                                          <button className="btn btn-danger me-3" onClick={() => deleteDoctor(doctor)}>Șterge</button>
                                       </div>
                                       }
                                       {statusButton && 
                                          <div>
                                             <button className="btn btn-primary me-1" onClick={() => approveFarmacist(doctor)}>Aprobă</button> 
                                             <button className="btn btn-danger me-2" onClick={() => deleteFarmacist(doctor)}>Șterge</button> 
                                          </div>
                                       }
                                    </td>
                                 </tr>
                                 )}
                           </tbody>

                        </table>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   ) 
}

export default AdminDashbord;