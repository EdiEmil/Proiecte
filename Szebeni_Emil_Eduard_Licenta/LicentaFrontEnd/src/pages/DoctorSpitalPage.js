import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DoctorService from "../services/DoctorService";
import Trimitere from "../models/Trimitere";
import {TrimitereSave} from "../templates/TrimitereSave";
import Prescriere from "../models/Prescriere";
import { PrescriereSave } from "../templates/PrescriereSave";
import { TrimitereView } from "../templates/TrimitereView";
// tot ce am aici este luat din doctorpage, nu am schimbat nimic, dar este rutata
const DoctorSpitalPage = () => {

    const [programareForDoctor, setProgramreForDoctor] = useState([]);
    
    //const [userList, setUserList] = useState([]);
    const [prescriereList, setPrescriereList] = useState([]);
    const [selectedPrescriere, setSelectedPrescriere] = useState(new Prescriere('', '', '', '','','','','','','','','','','','','','','','','',''));
    const [loading, setLoading] = useState(false);

    const [trimitereDeAfisat, setTrimitereDeAfisat] = useState();

    const [selectedButton, setSelectedButton] = useState(0);
   
   const [errorMessage, setErrorMessage] = useState('');

   const saveComponent = useRef();
   const viewComponent = useRef();
   const deleteComponent = useRef();
   
   const currentUser = useSelector(state => state.user);

   const numeDoctor = currentUser?.lastName;
   const prenumeDoctor = currentUser?.firstName;
   const spital = currentUser?.institutie;
   const parafa = currentUser?.pozaParafa;
   //////////////////////////////////////////////////////// AICI TREBUIE SCHIMBAT CU SECTIE DUPA CE ADAUG PROPRIETATEA SECTIE SI IN BACKEND
   const sectie = currentUser?.institutie;

   const dispatch = useDispatch();

   

   useEffect(() => {
            DoctorService.getProgramareByDoctorNou(numeDoctor,prenumeDoctor,spital).then((response) => {
               setProgramreForDoctor(response.data);
              });

            // DoctorService.getTrimitereFromProgramare(trimitereId)
   }, []);

   
      let selectedUser = [];
     if(programareForDoctor.length > 0){
        selectedUser = programareForDoctor[selectedButton];
     }
     let userFirstName = selectedUser.numePacient;
     let userLastName = selectedUser.prenumePacient;
     let userCnp = selectedUser.cnpPacient; 
   
     const viewTrimitere = () => {
      const user = programareForDoctor[selectedButton];
      const trimitereId = user.trimiterePacientId;

      DoctorService.getTrimitereFromProgramare(trimitereId).then((response) => {
         setTrimitereDeAfisat(response.data);
         viewComponent.current?.showTrimitereViewModal();
      }).catch((error) => {
         console.log("Eroare pt getTrimitereFromProgramare: " + error);
      })
     }

   const createPrescriere = () => {
    setSelectedPrescriere(new Prescriere('','','','','','','','','','','','','','','','','','','','','','',''));
    saveComponent.current?.showPrescriereModal();
   };
   

   const savePrescriereWatcher = (prescriere) => {
      let itemIndex = prescriereList.findIndex(item => item.id === prescriere.id);

      if (itemIndex !== -1) {
          const newList = prescriereList.map((item) => {
              if (item.id === prescriere.id) {
                  return prescriere;
              }
              return item;
          });
          setPrescriereList(newList);
      } else {
          const newList = prescriereList.concat(prescriere);
          setPrescriereList(newList);
      }
  };

   return(
      <div>
         <div className="container mt-5 mx-8 conatiner-pad">
            <div className="pt-4 mx-5">

               {/* {errorMessage && 
                  <div className="alert alert-danger">
                     {errorMessage}
                  </div> 
               } */}

               <div className="card ms-auto me-auto p-3 shadow-lg custom-table ">
                  <div className="card-header">

                     <div className="row">
                        <div className="col-6">
                           <h3>Programari Active</h3>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                           <button className="btn btn-primary" onClick={() => createPrescriere()}>
                                 Crează o prescriere
                           </button>
                        
                        {/* <div className="col-12 d-flex justify-content-end"> */}
                           <button className="btn btn-primary" style={{marginLeft:'15px'}} onClick={() => viewTrimitere()}>
                                 Vizualizează o trimitere
                           </button>
                        {/* </div> */}
                        </div>
                     </div>

                     <div className="card-body " >
                        <table className="table table-striped ">
                           
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">Nume Pacient</th>
                                 <th scope="col">Prenume Pacient</th>
                                 <th scope="col">CNP Pacient</th>
                                 <th scope="col">Data Programare</th>
                                 <th scope="col">Ora</th>
                                 <th scope="col">Secție</th>
                              </tr>
                           </thead>
                           
                           <tbody>
                              {programareForDoctor.map((programare,ind) => 
                                 <tr key={programare.id}>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{programare.numePacient}</td>
                                    <td>{programare.prenumePacient}</td>
                                    <td setUserFirstName={programare.firstName}>{programare.cnpPacient}</td>
                                    <td>{programare.dataProgramare}</td>
                                    <td>{programare.intervalOrar}</td>
                                    <td>{programare.sectie}</td>
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
               
               <PrescriereSave ref={saveComponent} userFirstName={userFirstName} userLastName={userLastName} userCnp={userCnp} parafa={parafa}prescriere={selectedPrescriere} onSaved={(p) => savePrescriereWatcher(p)} />
               <TrimitereView ref={viewComponent} trimitereDeAfisat={trimitereDeAfisat} onShow={(t) => viewTrimitere(t)} />
            </div>
         </div>

         
      </div>
   )
}
export default DoctorSpitalPage;