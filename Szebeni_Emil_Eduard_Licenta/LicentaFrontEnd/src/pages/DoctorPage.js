import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DoctorService from "../services/DoctorService";
import Trimitere from "../models/Trimitere";
import {TrimitereSave} from "../templates/TrimitereSave";

const DoctorPage = () => {

    const [userList, setUserList] = useState([]);
    const [trimitereList, setTrimitereList] = useState([]);
    const [selectedTrimitere, setSelectedTrimitere] = useState(new Trimitere('', '', '', ''));
    const [loading, setLoading] = useState(false);

    const [selectedButton, setSelectedButton] = useState(0);
   
   const [errorMessage, setErrorMessage] = useState('');

   // const [selectedUser, setSelectedUser] = useState([]);
   // const [userFirstName, setUserFirstName] = useState('');

   const saveComponent = useRef();
   const deleteComponent = useRef();
   
   

   
//    const [statusButton, setStatusButton] = useState(false);
   //const [selectedDoctor, setSelectedDoctor] = useState(new Doctor('','','','','',''));

   const dispatch = useDispatch();

   const currentUser = useSelector(state => state.user);
   const codParafa = currentUser.pozaParafa;

   useEffect(() => {
         // async function fetchData() {
         //    try{
         //       const response = await DoctorService.getUsersByNumeDoctorFamilie(currentUser);
         //       setUserList(response.data);
         //    } catch(error){
         //       console.log(error);
         //    }

            DoctorService.getUsersByNumeDoctorFamilie(currentUser).then((response) => {
               setUserList(response.data);
               //console.log(doctorList);
              });
            //}
         // fetchData();
           
   }, []);

   
      let selectedUser = [];
     //selectedUser = (userList[1]);
     if(userList.length > 0){
        selectedUser = userList[selectedButton];
       
   // //    // console.log("Aici avem numele cautat: " + userFirstName);
     }
     let userFirstName = selectedUser.firstName;
     let userLastName = selectedUser.lastName;
     let userCnp = selectedUser.cnp; 


   // aici am facut un test unde am hardcodat valoarea care se trimite prin props dar trebuie sa vedem de ce selectedUser are valoare undefined pentru ca in momentul in care se initializeaza cu userList aceasta nu are inca valori de la api
   //   const userFirstNameProp = userFirstName;
   //  const userFirstNameProp = userFirstName;
   // console.log("Aici avem numele cautat: " + userFirstNameProp);

   const createTrimitere = () => {
    setSelectedTrimitere(new Trimitere('',''));
    saveComponent.current?.showTrimitereModal();
   };

   const saveTrimitereWatcher = (trimitere) => {
      let itemIndex = trimitereList.findIndex(item => item.id === trimitere.id);

      if (itemIndex !== -1) {
          const newList = trimitereList.map((item) => {
              if (item.id === trimitere.id) {
                  return trimitere;
              }
              return item;
          });
          setTrimitereList(newList);
      } else {
          const newList = trimitereList.concat(trimitere);
          setTrimitereList(newList);
      }
  };

   // const saveTrimitere = (trimitere) => {

   //    DoctorService.createTrimitere(trimitere).then((response) => {
   //       console.log(response);
   //    }).catch((error) => {
   //       setErrorMessage("Eroare pentru approve Doctor");
   //       console.log(error);
   //    });
   // };

   return(
      <div>
         <div className="container mt-5 mx-8 container-pad">
            <div className="pt-4 mx-5">

               {/* {errorMessage && 
                  <div className="alert alert-danger">
                     {errorMessage}
                  </div> 
               } */}

               <div className="card ms-auto me-auto p-3 shadow-lg custom-table">
                  <div className="card-header">

                     <div className="row">
                        <div className="col-6">
                           <h3 style={{width:'300px'} }>Pacienți înregistrați</h3>
                        </div>

                        <div className="col-6 d-flex justify-content-end">
                                          <button className="btn btn-primary" onClick={() => createTrimitere()}>
                                             Creeați o trimitere
                                          </button>
                                       </div>
                     </div>

                     <div className="card-body">
                        <table className="table table-striped">
                           
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">Username</th>
                                 <th scope="col">Nume</th>
                                 <th scope="col">Prenume</th>
                                 <th scope="col">CNP</th>
                                 <th scope="col">DoctorFam</th>
                                 <th scope="col">Trimitere</th>
                              </tr>
                           </thead>
                          
                           <tbody>
                              {userList.map((user,ind) => 
                                 <tr key={user.id}>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{user.username}</td>
                                    <td>{user.lastName}</td>
                                    <td setUserFirstName={user.firstName}>{user.firstName}</td>
                                    <td>{user.cnp}</td>
                                    <td>{user.numeDoctorFamilie}</td>
                                    <td>
                                       <input type="radio" name="selectButton" value={ind} onChange={(e) => setSelectedButton(e.target.value)}></input>
                                    </td>
                                 </tr>
                                 )}
                           </tbody>

                        </table>
                     </div>
                  </div>
               </div>
               
               <TrimitereSave ref={saveComponent} userFirstName={userFirstName} userLastName={userLastName} userCnp={userCnp} codParafa={codParafa} trimitere={selectedTrimitere} onSaved={(p) => saveTrimitereWatcher(p)} />
            </div>
         </div>

         
      </div>
   )
}
export default DoctorPage;