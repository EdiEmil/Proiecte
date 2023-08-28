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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faSquareMinus, faUserAltSlash } from "@fortawesome/free-solid-svg-icons";

const TrimitereView = forwardRef((props, ref) => {

    // const { userFirstName } = props;
    // console.log("Aici avem numele din Modal: " + userFirstName);

    const { trimitereDeAfisat } = props;

    const [idButton, setIdButton] = useState();

    useImperativeHandle(ref, () => ({
         showTrimitereViewModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);
         }
    }));

    const [trimitere, setTrimitere] = useState(new Trimitere('', ''));

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

    const saveTrimitere = (e) => {
        e.preventDefault();

        //setSubmitted(true);

        // if(!trimitere.serie || !trimitere.numar){
        //     return;
        // }

        UserService.getTrimitereById(idButton).then(response => {
            props.onSaved(response.data);
            setShow(true);
            //setSubmitted(false);
        }).catch(err => {
            setErrorMessage("Eroare pentru vizualizare Trimitere");
            console.log(err);
        });
    };

    return (
        <Modal show={show}>
                {/* onSubmit={(e) => saveTrimitere(e)} */}
            <form 
            noValidate
            className={submitted ? 'was-validated' : ''}>

                <div className="modal-header">
                    <h5 className="modal-title">Trimitere</h5>
                    <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                </div>

                <div className="modal-body">

                    {errorMessage &&
                    <div className="alert alert-danger">
                        {errorMessage}
                    </div>
                    }

                        {/* aici unde am value trebuie sa fac ca la regisrter unde nu folosim value si sa setes setSerie cu valoarea primita din props  */}
                    <div className="form-group">
                       { trimitereDeAfisat&&
                        <div>
                            <div className="wrapper-sex">
                                <div><h4>Serie: {trimitereDeAfisat.serie}</h4></div>
                                <div style={{marginLeft: 'auto'}} ><h4>Numar: {trimitereDeAfisat.numar}</h4></div> 
                            </div>
                            
                            <div style={{marginTop:'10px'}}><h5>Către Specialitatea Clinică: {trimitereDeAfisat.catreSpecialitateaClinica}</h5></div>

                            <hr className="horizontal-line" />

                            <div><h6 style={{fontSize:'20px', fontWeight:'bold'}}>2. Unitate Medicală</h6></div>

                            <div style={{flex: 1}}>
                                <div className="row">
                                    <div className="col-sm-4">
                                        {trimitereDeAfisat.cui &&
                                            <p style={{fontSize:'20px'}}>Cui: <span style={{textDecoration: 'underline'}}>{trimitereDeAfisat.cui}</span></p>
                                        }
                                        {!trimitereDeAfisat.cui &&
                                            <p style={{fontSize:'20px'}}>Cui: <span>...................</span></p>
                                        }
                                        
                                        {trimitereDeAfisat.sediu &&
                                            <p style={{fontSize:'20px'}}>Sediu: <span style={{textDecoration:'underline'}}>{trimitereDeAfisat.sediu}</span></p>
                                        }
                                        {!trimitereDeAfisat.sediu &&
                                            <p style={{fontSize:'20px'}}>Sediu: <span style={{textDecoration:'underline'}}>...................</span></p>
                                        }
                                        
                                        {trimitereDeAfisat.judetul &&
                                            <p style={{fontSize:'20px'}}>Județul: <span style={{textDecoration:'underline'}}>{trimitereDeAfisat.judetul}</span></p>
                                        }
                                        {!trimitereDeAfisat.judetul &&
                                            <p style={{fontSize:'20px'}}>Județul: <span style={{textDecoration:'underline'}}>...................</span></p>
                                        }
                                        
                                    </div>

                                    <div className="col-sm-4">
                                        
                                        {trimitereDeAfisat.mf &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> MF</p>
                                        }
                                        {!trimitereDeAfisat.mf &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> MF</p>
                                        }
                                        
                                        {trimitereDeAfisat.ambSpec &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Amb. Spec.</p>
                                        }
                                        {!trimitereDeAfisat.ambSpec &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Amb. Spec.</p>
                                        }
                                        
                                        {trimitereDeAfisat.altele &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Altele</p>
                                        }
                                        {!trimitereDeAfisat.altele &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Altele</p>
                                        }
                                        
                                        
                                    </div>

                                    
                                    <div className="col-sm-4">
                                        <div><h5>Nivel de prioritate</h5></div>
                                        
                                        {trimitereDeAfisat.urgenta &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Urgență</p>
                                        }
                                        {!trimitereDeAfisat.urgenta &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Urgență</p>
                                        }  
                                        
                                        {trimitereDeAfisat.curente &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Curente</p>
                                        }
                                        {!trimitereDeAfisat.curente &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Curente</p>
                                        }
                                        
                                        {trimitereDeAfisat.nrContract &&
                                            <p >Nr. Contract: {trimitereDeAfisat.nrContract}</p>
                                        }
                                        {!trimitereDeAfisat.nrContract &&
                                            <p >Nr. Contract: ................</p>
                                        }
                                        
                                    </div>
                                </div>
                            </div>

                             {trimitereDeAfisat.casaDeAsigurari &&
                                <p style={{fontSize: '20px'}}>Casa de Asigurări: <span style={{textDecoration: 'underline'}}>{trimitereDeAfisat.casaDeAsigurari}</span></p>  
                             }   
                            

                            <hr className="horizontal-line" />
                            
                            <div><h6 style={{fontSize:'20px', fontWeight: 'bold'}}>3. Date de indentificare pacient</h6></div>
                            <div style={{flex:1}}>
                                <div className="row">
                                    <div className="col-sm-4">
                                        {trimitereDeAfisat.asiguratLaCas &&
                                            <p style={{fontSize:'20px'}}>Asigurat la CAS: <div style={{textDecoration:'underline'}}>{trimitereDeAfisat.asiguratLaCas}</div></p>
                                        }
                                        {!trimitereDeAfisat.asiguratLaCas &&
                                            <p>Asigurat la CAS: .....................</p>
                                        }
                                        
                                        {trimitereDeAfisat.nume &&
                                            <p style={{fontSize:'20px'}}> Nume:<span style={{textDecoration:'underline'}}> {trimitereDeAfisat.nume}</span></p>
                                        }
                                        {!trimitereDeAfisat.nume &&
                                            <p style={{fontSize: '20px'}}>Nume: .....................</p>
                                        }
                                        
                                        {trimitereDeAfisat.prenume &&
                                            <p style={{fontSize: '20px'}}>Prenume: <span style={{textDecoration:'underline'}}>{trimitereDeAfisat.prenume}</span></p>
                                        }
                                        {!trimitereDeAfisat.prenume &&
                                            <p style={{fontSize: '20px'}}>Prenume: .....................</p>
                                        }
                                        
                                        {trimitereDeAfisat.adresa &&
                                            <p style={{fontSize: '20px'}}>Adresă: <div style={{textDecoration: 'underline'}}>{trimitereDeAfisat.adresa}</div></p>
                                        }
                                        {!trimitereDeAfisat.adresa &&
                                            <p style={{fontSize: '20px'}}>Adresă: .....................</p>
                                        }
                                        
                                        {trimitereDeAfisat.cnp &&
                                            <p style={{fontSize: '20px'}}>CNP: <div style={{textDecoration: 'underline'}}>{trimitereDeAfisat.cnp}</div></p>
                                        }
                                        {!trimitereDeAfisat.cnp &&
                                            <p style={{fontSize: '20px'}}>CNP: .....................</p>
                                        }
                                        
                                        {trimitereDeAfisat.cetatenia &&
                                            <p style={{fontSize: '20px'}}>Cetățenia: <span style={{textDecoration:'underline'}}>{trimitereDeAfisat.cetatenia} </span></p>
                                        } 
                                        {!trimitereDeAfisat.cetatenia &&
                                            <p style={{fontSize: '20px'}}>Cetățenia: .....................</p>
                                        }
                                        
                                    </div>

                                    <div className="col-sm-4">
                                        {trimitereDeAfisat.salariat &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Salariat</p>
                                        }
                                        {!trimitereDeAfisat.salariat &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Salariat</p>
                                        }

                                        {trimitereDeAfisat.coasigurat &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Coasigurat</p>
                                        }
                                        {!trimitereDeAfisat.coasigurat &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Coasigurat</p>
                                        }
                                        
                                        {trimitereDeAfisat.liberProfesionist &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Liber Profesionist</p>
                                        }
                                        {!trimitereDeAfisat.liberProfesionist &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Liber Profesionist</p>
                                        }
                                        
                                        {trimitereDeAfisat.copil &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Copil</p>
                                        }
                                        {!trimitereDeAfisat.copil &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Copil</p>
                                        }
                                        
                                        {trimitereDeAfisat.elevUcenicStudent &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Elev/Ucenic/Student</p>
                                        }
                                        {!trimitereDeAfisat.elevUcenicStudent &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Elev/Ucenic/Student: </p>
                                        }
                                        
                                        {trimitereDeAfisat.gravida &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Gravidă/Lehuză</p>
                                        }
                                        {!trimitereDeAfisat.gravida &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Gravidă/Lehuză</p>
                                        }
                                        
                                        {trimitereDeAfisat.pensionar &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Pensionar</p>
                                        }
                                        {!trimitereDeAfisat.pensionar &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Pensionar</p>
                                        }
                                        
                                        {trimitereDeAfisat.alteCategorii &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Alte Categorii</p>
                                        }
                                        {!trimitereDeAfisat.alteCategorii &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Alte Categorii</p>
                                        }
                                        
                                        
                                    </div>

                                    <div className="col-sm-4">
                                        
                                        {trimitereDeAfisat.veteran &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Veteran</p>
                                        }
                                        {!trimitereDeAfisat.veteran &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Veteran</p>
                                        }
                                        
                                        {trimitereDeAfisat.revolutionar &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Revolutionar</p>
                                        }
                                        {!trimitereDeAfisat.revolutionar &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Revolutionar</p>
                                        }
                                        
                                        {trimitereDeAfisat.handicap &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Handicap</p>
                                        }
                                        {!trimitereDeAfisat.handicap &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Handicap</p>
                                        }
                                        
                                        {trimitereDeAfisat.pns &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Pns</p>
                                        }
                                        {!trimitereDeAfisat.pns &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Pns</p>
                                        }
                                        
                                        {trimitereDeAfisat.ajutorSocial &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Ajutor Social</p>
                                        }
                                        {!trimitereDeAfisat.ajutorSocial &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Ajutor Social</p>
                                        }
                                        
                                        {trimitereDeAfisat.somaj &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Șomaj</p>
                                        }
                                        {!trimitereDeAfisat.somaj &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Șomaj</p>
                                        }
                                        
                                        {trimitereDeAfisat.personalContractual &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Persoanl Contractual</p>
                                        }
                                        {!trimitereDeAfisat.personalContractual &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Persoanl Contractual</p>
                                        }
                                        
                                        {trimitereDeAfisat.cardEuropean &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Card European</p>
                                        }
                                        {!trimitereDeAfisat.cardEuropean &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Card European</p>
                                        }
                                        
                                        {trimitereDeAfisat.acorduriInternationale &&
                                            <p><FontAwesomeIcon icon={faSquareCheck}  /> Acorduri Internaționale</p>
                                        }
                                        {!trimitereDeAfisat.acorduriInternationale &&
                                            <p><FontAwesomeIcon icon={faSquareMinus}  /> Acorduri Internaționale</p>
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper-sex">
                                            <div><p style={{marginRight:'10px', fontSize: '20px'}}>Beneficiar: </p></div>

                                            {trimitereDeAfisat.pachetDeBaza &&
                                                <p style={{marginRight: '15px'}}><FontAwesomeIcon icon={faSquareCheck}  /> Pachet de Bază</p>
                                            }
                                            {!trimitereDeAfisat.pachetDeBaza &&
                                                <p style={{marginRight: '15px'}}><FontAwesomeIcon icon={faSquareMinus}  /> Pachet de Bază</p>
                                            }
                                            
                                            {trimitereDeAfisat.pachetMinimal &&
                                                <p><FontAwesomeIcon icon={faSquareCheck}  /> Pachet Minimal</p>
                                            }
                                            {!trimitereDeAfisat.pachetMinimal &&
                                                <p><FontAwesomeIcon icon={faSquareMinus}  /> Pachet Minimal</p>
                                            }
                                            
                                        </div>
                            
                            <hr className="horizontal-line" />

                            <div><h6 style={{fontWeight: 'bold', fontSize: '20px'}}>4. Diagnostic prezumtiv/diagnostic:</h6>
                                <div style={{fontSize: '20px', textDecoration: 'underline'}}>{trimitereDeAfisat.diagnosticPrezumtiv}</div> 
                            </div>
                            <p style={{fontSize:'20px'}}>Cod diagnostic Prezumtiv: <span style={{textDecoration:'underline'}}>{trimitereDeAfisat.codDiagnosticPrezumtiv} </span></p>

                            <div className="wrapper-sex">
                                <div><p style={{marginTop:'10px', fontSize: '20px'}}>Tip Diagnostic: </p></div>
                                
                                {trimitereDeAfisat.p &&
                                    <p style={{marginTop:'12px'}}> <FontAwesomeIcon icon={faSquareCheck}  /> P  |</p>
                                }
                                {!trimitereDeAfisat.p &&
                                    <p style={{marginTop:'12px'}}><FontAwesomeIcon icon={faSquareMinus}  /> P  |</p>
                                }
                                
                                {trimitereDeAfisat.aS &&
                                    <p style={{marginTop:'12px'}}><FontAwesomeIcon icon={faSquareCheck}  /> A/S  |</p>
                                }
                                {!trimitereDeAfisat.aS &&
                                    <p style={{marginTop:'12px'}}><FontAwesomeIcon icon={faSquareMinus}  /> A/S  |</p>
                                }
                                
                                {trimitereDeAfisat.c &&
                                    <p style={{marginTop:'12px'}}><FontAwesomeIcon icon={faSquareCheck}  /> C  |</p>
                                }
                                {!trimitereDeAfisat.c &&
                                    <p style={{marginTop:'12px'}}><FontAwesomeIcon icon={faSquareMinus}  /> C  |</p>
                                }
                                
                                {trimitereDeAfisat.m &&
                                    <p style={{marginTop:'12px'}}><FontAwesomeIcon icon={faSquareCheck}  /> M  </p>
                                }
                                {!trimitereDeAfisat.m &&
                                    <p style={{marginTop:'12px'}}><FontAwesomeIcon icon={faSquareMinus}  /> M  </p>
                                }
                                
                            </div>

                            <div><h6 style={{fontSize:'20px' , fontWeight:'bold'}}>5. Alte Diagnostice Cunoscute:</h6></div>
                            <p style={{fontSize:'20px'}}><span style={{textDecoration:'underline'}}>{trimitereDeAfisat.alteDiagnosticeCunoscute} </span></p>
                            <p style={{fontSize:'20px' , fontWeight:'bold'}}>Cod Diagnostic: <span style={{textDecoration:'underline', fontWeight:'normal'}}>{trimitereDeAfisat.codDiagnostic}</span> </p>

                            <div><h6 className="top-margin" style={{fontSize:'20px' , fontWeight:'bold'}}>6. Motivul trimiterii către alte specialități clinice în vederea internării:</h6></div>
                            <p style={{fontSize:'20px', textDecoration:'underline'}}>{trimitereDeAfisat.motivulTrimiteriiCatreAlteSpecialitati}</p>

                            <div><h6 className="top-margin" style={{fontSize:'20px' , fontWeight:'bold'}}>7. Investigații și tratamente efectuate:</h6></div>
                            <p style={{fontSize:'20px', textDecoration:'underline'}}> {trimitereDeAfisat.investigatiiSiTratamenteEfectuate}</p>   
                            
                            <div className="wrapper-sex">
                            <div><h6 className="top-margin" style={{fontSize:'20px' , fontWeight:'bold'}}>8. Număr de consultații acordate: </h6></div>
                            <p style={{fontSize:'20px', textDecoration:'underline', marginTop:'20px'}}>{trimitereDeAfisat.nrDeConsultatiiAcordate}</p>
                            </div>
                            <hr className="horizontal-line" />

                            <div className="wrapper-sex">
                                <div><h6 style={{fontSize: '20px', fontWeight: 'bold'}}>9. Data Trimiterii: </h6></div>
                                <p style={{fontSize: '20px', textDecoration: 'underline', marginTop: '7px'}}>{trimitereDeAfisat.dataTrimiterii}</p>
                                {/* <p>Cod Parafă: {trimitereDeAfisat.codParafa}</p> */}
                            </div>
                            
                            <hr className="horizontal-line" />

                            <div className="wrapper-sex">
                                <div><h6 style={{fontSize: '20px', fontWeight: 'bold'}}>10. Se internează în unitatea sanitară cu paturi:</h6></div>
                                {!trimitereDeAfisat.seInterneazaInUnitateaCuPaturi &&
                                    <p style={{fontSize: '20px', marginTop: '10px'}}>.........................................</p>
                                }
                                
                            </div>
                            {trimitereDeAfisat.seInterneazaInUnitateaCuPaturi &&
                                    <p style={{fontSize: '20px'}}>{trimitereDeAfisat.seInterneazaInUnitateaCuPaturi}</p>
                            }
                            
                            {trimitereDeAfisat.sectie && 
                                <p style={{fontSize: '20px'}}>Secție: <span style={{textDecoration: 'underline'}}>{trimitereDeAfisat.sectie}</span></p>
                            }
                            {!trimitereDeAfisat.sectie && 
                                <p style={{fontSize: '20px'}}>Secție: <span >..................</span></p>
                            }
                            

                            <div><h6 style={{fontSize:'20px', fontWeight: 'bold'}}>11. Motivul pentru care nu a fost necesară internarea la domiciliu:</h6></div>
                                {trimitereDeAfisat.motivulPtCareNuAFostNecesaraInternareaLaDomiciliu &&
                                    <p style={{fontSize:'20px'}}>{trimitereDeAfisat.motivulPtCareNuAFostNecesaraInternareaLaDomiciliu}</p>
                                }
                                {!trimitereDeAfisat.motivulPtCareNuAFostNecesaraInternareaLaDomiciliu &&
                                    <p style={{fontSize: '20px'}}>......................................</p>
                                }
                                
                            <div className="wrapper-sex" style={{justifyContent: 'space-between'}}>
                                <div><h6 style={{fontSize: '20px', fontWeight: 'bold'}}> Data Prezentării:</h6></div>
                                <p style={{fontSize: '20px', textDecoration: 'underline', marginRight:'50px', marginTop:'5px'}}>{trimitereDeAfisat.dataPrezentarii}</p>
                                <div><h6 style={{fontSize: '20px', fontWeight: 'bold'}}>Parafă Medic Servicii Medicale:</h6></div>
                                <p style={{fontSize: '20px', textDecoration: 'underline', marginTop:'5px'}}>{trimitereDeAfisat.parafaMedicServiciiMedicale}</p>
                            </div>

                            <div className="wrapper-sex" style={{justifyContent: 'space-between', }}>
                                
                               
                            </div>

                            {/* <p>Unitatea Sanitară cu Paturi: {trimitereDeAfisat.unitateaSanitaraCuPaturi}</p> */}

                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            {/* <p>Motivul pentru care nu a fost necesară internarea la domiciliu: {trimitereDeAfisat.motivulPtCareNuAFostNecesaraInternareaLaDomiciliu}</p> */}
                            
                            
                        </div>
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

export {TrimitereView};