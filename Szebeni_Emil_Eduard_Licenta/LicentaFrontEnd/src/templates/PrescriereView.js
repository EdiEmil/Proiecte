import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import Trimitere from '../models/Trimitere';
import DoctorService from '../services/DoctorService';
import { Modal } from "react-bootstrap";
import { useRef } from "react";
import UserService from "../services/UserService";
import Programare from "../models/Programare";
import Prescriere from "../models/Prescriere";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckToSlot, faSquare, faSquareCheck, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
// nu am schimbat aproape nimic, aici urmeaza sa fie view pt Programare la doctorul spital
const PrescriereView = forwardRef((props, ref) => {

    // const { userFirstName } = props;
    // console.log("Aici avem numele din Modal: " + userFirstName);

    const { prescriereDeAfisat } = props;

    const [idButton, setIdButton] = useState();

    useImperativeHandle(ref, () => ({
         showPrescriereViewModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);
         }
    }));

    const [prescriere, setPrescriere] = useState(new Prescriere('', ''));

    // useEffect(() => {
    //     setTrimitere(props.trimitere);
    // }, [props.trimitere]);

    
    const [serie, setSerie] = useState('');
    const [numar, setNumar] = useState('');
    const [nume, setNume] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

    
    
    // useEffect(() => {
        
    //     setTrimitere(new Trimitere(serie,numar,'','','','','','','','','','','','','',userFirstName));
    // },[serie,numar, userFirstName]);

    const savePrescriere = (e) => {
        e.preventDefault();

        //setSubmitted(true);

        // if(!trimitere.serie || !trimitere.numar){
        //     return;
        // }

        UserService.getPrescriereById(idButton).then(response => {
            props.onSaved(response.data);
            setShow(true);
            //setSubmitted(false);
        }).catch(err => {
            setErrorMessage("Eroare pentru vizualizare Prescriere");
            console.log(err);
        });
    };

    // const handleChange = (e) => {
    //     const {name, value} = e.target;

    //     setTrimitere((prevState => {
    //         return {
    //             ...prevState,
    //             [name]: value
    //         };
    //     }));
    // };

    return (
        <Modal show={show}>
                {/* onSubmit={(e) => saveTrimitere(e)} */}
            <form 
           >

                <div className="modal-header">
                    <h5 className="modal-title">Vizualizare Prescriere</h5>
                    <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                </div>

                <div className="modal-body">

                   

                        {/* aici unde am value trebuie sa fac ca la regisrter unde nu folosim value si sa setes setSerie cu valoarea primita din props  */}
                    <div className="form-group">
                       { prescriereDeAfisat&&
                        <div>
                            <div style={{flex:1}}>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="custom-text">Serie: {prescriereDeAfisat.serie}</p> 
                                        <p>Numar: {prescriereDeAfisat.numar}</p>
                                        
                                        {prescriereDeAfisat.cui && 
                                            <p>Cui:{prescriereDeAfisat.cui} </p>
                                        }
                                        {!prescriereDeAfisat.cui && 
                                            <p>Cui: .......... </p>
                                        }
                                        
                                        <p>CAS: {prescriereDeAfisat.cas}</p>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>Aprobat: {prescriereDeAfisat.aprobat}</p>
                                        <p>Aprobat Comisie: {prescriereDeAfisat.aprobatComisie}</p>
                                    </div>
                                    <div className="col-sm-4">
                                       {prescriereDeAfisat.mf && 
                                        <p>MF:  <FontAwesomeIcon icon={faSquareCheck}  /></p>
                                        }
                                        {!prescriereDeAfisat.mf && 
                                        <p>MF: <FontAwesomeIcon icon={faSquareMinus} />  </p>
                                        }
                                        
                                        {prescriereDeAfisat.ambulatoriu && 
                                            <p>Ambulatoriu: <FontAwesomeIcon icon={faSquareCheck} /></p>
                                        }
                                        {!prescriereDeAfisat.ambulatoriu && 
                                            <p>Ambulatoriu: <FontAwesomeIcon icon={faSquareMinus} /></p>
                                        }

                                        {prescriereDeAfisat.spital &&
                                            <p>Spital:<FontAwesomeIcon icon={faSquareCheck} /> </p>
                                        }
                                        {!prescriereDeAfisat.spital &&
                                            <p>Spital:<FontAwesomeIcon icon={faSquareMinus} /> </p>
                                        }
                                        
                                        {prescriereDeAfisat.altele &&
                                            <p>Altele: <FontAwesomeIcon icon={faSquareCheck} /></p>
                                        }
                                        {!prescriereDeAfisat.altele &&
                                            <p>Altele: <FontAwesomeIcon icon={faSquareMinus} /></p>
                                        }
                                        
                                        {prescriereDeAfisat.mfMM &&
                                            <p>MfMM: <FontAwesomeIcon icon={faSquareCheck} /></p>
                                        }
                                        {!prescriereDeAfisat.mfMM &&
                                            <p>MfMM: <FontAwesomeIcon icon={faSquareMinus} /></p>
                                        } 
                                        
                                        
                                    </div>
                                </div>
                            </div>

                            <hr className="horizontal-line" />
                            
                            
                            
                        <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <h2 style={{display:'inline-block'}}>2. Asigurat</h2>

                            <div className="form-group" style={{display: 'inline-block'}}>
                                {prescriereDeAfisat.foRc && 
                             <p>FoRc: {prescriereDeAfisat.foRc} </p>
                            }
                            {!prescriereDeAfisat.foRc && 
                             <p>FoRc: ..........  </p>
                            }
                            </div>
                        </div>
                        <div style={{flex:1}}>
                            <div className="row">
                                <div className="col-sm-4">

                                    <p>Nume: {prescriereDeAfisat.nume}</p>

                                    <p>Prenume: {prescriereDeAfisat.prenume}</p>

                                    <p>CNP: {prescriereDeAfisat.cnp}</p>

                                    <p>Data Nașterii: {prescriereDeAfisat.dataNasterii}</p>
                                
                                <div className="wrapper-sex">
                                    {prescriereDeAfisat.m &&
                                        <p>M: <FontAwesomeIcon icon={faSquareCheck} /> </p>
                                    }
                                    {!prescriereDeAfisat.m &&
                                        <p>M: <FontAwesomeIcon icon={faSquareMinus} /> </p>
                                    }

                                    {prescriereDeAfisat.f &&
                                        <p>F: <FontAwesomeIcon icon={faSquareCheck} /></p>
                                    }
                                    {!prescriereDeAfisat.f &&
                                        <p>F: <FontAwesomeIcon icon={faSquareMinus} /></p>
                                    }
                                    
                                    {prescriereDeAfisat.cetatenia &&
                                        <p>Cetatenia: </p>
                                    }
                                    {!prescriereDeAfisat.cetatenia &&
                                        <p>Cetatenia: .......... </p>
                                    }
                                    
                                </div>
                                </div>
                                <div className="col-sm-4">
                                    
                                    {prescriereDeAfisat.salariat &&
                                      <p> <FontAwesomeIcon icon={faSquareCheck} /> Salariat  </p> 
                                    }
                                    {!prescriereDeAfisat.salariat &&
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> Salariat  </p>
                                    }
                                    
                                    {prescriereDeAfisat.coasigurat &&
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> Coasigurat </p>
                                    }
                                    {!prescriereDeAfisat.coasigurat &&
                                        <p> <FontAwesomeIcon icon={faSquareMinus} /> Coasigurat </p>
                                    }
                                    
                                    {prescriereDeAfisat.liberProfesionist && 
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> Liber Profesionist  </p>
                                    } 
                                    {!prescriereDeAfisat.liberProfesionist && 
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> Liber Profesionist  </p>
                                    }

                                    {prescriereDeAfisat.copil && 
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> Copil  </p>
                                    }  
                                    {!prescriereDeAfisat.copil && 
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> Copil  </p>
                                    } 
                                    
                                    {prescriereDeAfisat.elevUcenicStudent &&
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> Elev/Ucenic/Student </p>
                                    }
                                    {!prescriereDeAfisat.elevUcenicStudent &&
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> Elev/Ucenic/Student </p>
                                    }
                                    
                                    {prescriereDeAfisat.gravida &&
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> Gravidă/Lehuză  </p>
                                    } 
                                    {!prescriereDeAfisat.gravida &&
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> Gravidă/Lehuză  </p>
                                    } 
                                    
                                    {prescriereDeAfisat.pensionar &&
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> Pensionar </p>
                                    }
                                    {!prescriereDeAfisat.pensionar &&
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> Pensionar </p>
                                    }

                                    {prescriereDeAfisat.veteran &&
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> Veteran  </p>
                                    }
                                    {!prescriereDeAfisat.veteran &&
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> Veteran  </p>
                                    }

                                    {prescriereDeAfisat.venitMic &&
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> 0-700 lei/lună </p>
                                    }
                                    {!prescriereDeAfisat.venitMic &&
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> 0-700 lei/lună </p>
                                    }
                                    
                                    
                                    
                                    
                                </div>
                                <div className="col-sm-4">

                                    {prescriereDeAfisat.revolutionar &&
                                        <p> <FontAwesomeIcon icon={faSquareCheck} /> Revoluționar  </p>
                                    }
                                    {!prescriereDeAfisat.revolutionar &&
                                        <p> <FontAwesomeIcon icon={faSquareMinus} /> Revoluționar  </p>
                                    }

                                    {prescriereDeAfisat.handicap &&
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> Handicap </p>
                                    }
                                    {!prescriereDeAfisat.handicap &&
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> Handicap </p>
                                    }
                                    
                                    {prescriereDeAfisat.pns &&
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> PNS </p>
                                    }
                                    {!prescriereDeAfisat.pns &&
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> PNS </p>
                                    }
                                    
                                    {prescriereDeAfisat.ajutorSocial &&
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> Ajutor Social </p>
                                    }
                                    {!prescriereDeAfisat.ajutorSocial &&
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> Ajutor Social </p>
                                    }

                                    {prescriereDeAfisat.somaj &&
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> Șomaj </p>
                                    }
                                    {!prescriereDeAfisat.somaj &&
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> Șomaj </p>
                                    }
                                    
                                    {prescriereDeAfisat.personalContractual &&
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> Personal Contractual  </p>
                                    }
                                    {!prescriereDeAfisat.personalContractual &&
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> Personal Contractual  </p>
                                    }

                                    {prescriereDeAfisat.cardEuropean &&
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> Card European(CE)  </p>
                                    }
                                    {!prescriereDeAfisat.cardEuropean &&
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> Card European(CE)  </p>
                                    }

                                    {prescriereDeAfisat.acordInternational &&
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> Acord Internațional </p>
                                    }
                                    {!prescriereDeAfisat.acordInternational &&
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> Acord Internațional </p>
                                    }
                                    
                                    {prescriereDeAfisat.alteCategorii &&
                                        <p><FontAwesomeIcon icon={faSquareCheck} /> Alte Categorii  </p>
                                    }
                                    {!prescriereDeAfisat.alteCategorii &&
                                        <p><FontAwesomeIcon icon={faSquareMinus} /> Alte Categorii  </p>
                                    }
                                </div>
                            </div>
                        </div>

                        <hr className="horizontal-line" />

                        <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <h2 style={{display:'inline-block'}}>3. Diagnostic / Cod Diagnostic</h2>
                        </div>
                        {prescriereDeAfisat.diagnostic &&
                            <h5>Diagnostic: {prescriereDeAfisat.diagnostic} </h5>
                        }
                        {!prescriereDeAfisat.diagnostic &&
                            <h5>Diagnostic: ..........</h5>
                        }
                        
                        <hr className="horizontal-line" />
                        
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        
                            {prescriereDeAfisat.dataPrescriere &&
                                <h6>Dată Prescriere: {prescriereDeAfisat.dataPrescriere} </h6>
                            }
                            {!prescriereDeAfisat.dataPrescriere &&
                                <h6>Dată Prescriere: ..........</h6>
                            }

                            {prescriereDeAfisat.numarZilePrescrise &&
                                <h6>Număr zile prescrise: {prescriereDeAfisat.numarZilePrescrise} </h6>
                            }
                            {!prescriereDeAfisat.numarZilePrescrise &&
                                <h6>Număr zile prescrise: ..........</h6>
                            }
                        </div>

                       
                        </div>
                        }    
                        {prescriereDeAfisat && 
                        <table className="form-table">
                            <thead>
                                <tr>
                                    <th style={{width:'15px'}}>
                                        #
                                    </th>
                                    <th style={{width:'140px'}}>
                                        Cod Diagnostic
                                    </th>
                                    <th style={{width:'140px'}}>
                                        Tip Diagnostic
                                    </th>
                                    <th style={{width:'140px'}}>
                                        Denumirea Internațională
                                    </th>
                                    <th style={{width:'140px'}}>
                                        Ds
                                    </th>
                                    <th style={{width:'140px'}}>
                                        Cantitate
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {prescriereDeAfisat.codDiagnostic1 &&
                                <tr>
                                    <td style={{display: 'flex', alignItems: 'center', marginTop: '6px'}}>
                                        1
                                    </td>
                                    <td>
                                        {prescriereDeAfisat.codDiagnostic1 &&
                                            <p className="form-control">{prescriereDeAfisat.codDiagnostic1}</p>
                                        }
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.tipDiagnostic1}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.denumireComunaInternationala1}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.ds1}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.cantitate1}</p>
                                    </td>
                                </tr>
                                }
                                {prescriereDeAfisat.codDiagnostic2 && 
                                <tr>
                                    <td style={{display: 'flex', alignItems: 'center', marginTop: '6px'}}>
                                        2
                                    </td>
                                    <td>
                                        {prescriereDeAfisat.codDiagnostic2 &&
                                            <p className="form-control">{prescriereDeAfisat.codDiagnostic2}</p>
                                        }
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.tipDiagnostic2}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.denumireComunaInternationala2}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.ds2}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.cantitate2}</p>
                                    </td>
                                </tr>
                                }
                                {prescriereDeAfisat.codDiagnostic3 && 
                                <tr>
                                    <td style={{display: 'flex', alignItems: 'center', marginTop: '6px'}}>
                                        3
                                    </td>
                                    <td>
                                        {prescriereDeAfisat.codDiagnostic3 &&
                                            <p className="form-control">{prescriereDeAfisat.codDiagnostic3}</p>
                                        }
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.tipDiagnostic3}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.denumireComunaInternationala3}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.ds3}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.cantitate3}</p>
                                    </td>
                                </tr>
                                }
                                {prescriereDeAfisat.codDiagnostic4 && 
                                <tr>
                                    <td style={{display: 'flex', alignItems: 'center', marginTop: '6px'}}>
                                        4
                                    </td>
                                    <td>
                                        {prescriereDeAfisat.codDiagnostic4 &&
                                            <p className="form-control">{prescriereDeAfisat.codDiagnostic4}</p>
                                        }
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.tipDiagnostic4}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.denumireComunaInternationala4}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.ds4}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.cantitate4}</p>
                                    </td>
                                </tr>
                                }
                                {prescriereDeAfisat.codDiagnostic5 && 
                                <tr>
                                    <td style={{display: 'flex', alignItems: 'center', marginTop: '6px'}}>
                                        5
                                    </td>
                                    <td>
                                        {prescriereDeAfisat.codDiagnostic5 &&
                                            <p className="form-control">{prescriereDeAfisat.codDiagnostic5}</p>
                                        }
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.tipDiagnostic5}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.denumireComunaInternationala5}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.ds5}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.cantitate5}</p>
                                    </td>
                                </tr>
                                }
                                {prescriereDeAfisat.codDiagnostic6 && 
                                <tr>
                                    <td style={{display: 'flex', alignItems: 'center', marginTop: '6px'}}>
                                        6
                                    </td>
                                    <td>
                                        {prescriereDeAfisat.codDiagnostic6 &&
                                            <p className="form-control">{prescriereDeAfisat.codDiagnostic6}</p>
                                        }
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.tipDiagnostic6}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.denumireComunaInternationala6}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.ds6}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.cantitate6}</p>
                                    </td>
                                </tr>
                                }
                                {prescriereDeAfisat.codDiagnostic7 && 
                                <tr>
                                    <td style={{display: 'flex', alignItems: 'center', marginTop: '6px'}}>
                                        7
                                    </td>
                                    <td>
                                        {prescriereDeAfisat.codDiagnostic7 &&
                                            <p className="form-control">{prescriereDeAfisat.codDiagnostic7}</p>
                                        }
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.tipDiagnostic7}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.denumireComunaInternationala7}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.ds7}</p>
                                    </td>
                                    <td>
                                        <p className="form-control">{prescriereDeAfisat.cantitate7}</p>
                                    </td>
                                </tr>
                                }
                            </tbody>
                        </table>
                        }
                    </div>
                    


                </div>

                <div className="modal-footer">
                    
                        <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Închide</button>
                    
                    {/* <button type="submit" className="btn btn-primary">Save Changes</button> */}
                </div>
            </form>
        </Modal>
    );
});

export {PrescriereView};