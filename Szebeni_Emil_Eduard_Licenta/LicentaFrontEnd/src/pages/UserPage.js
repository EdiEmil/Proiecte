import { faL, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import UserService from "../services/UserService";

const WORDS_ONLY = /^[A-Z][a-zA-Z]*( [A-Z][a-zA-Z]*)*$/;

const UserPage = () => {

    const USER_REGEX = /^[A-Z][a-z]*( [A-Z][a-z]*)*$/;

    const errorRef = useRef();
    const userRef = useRef(); 

    const [firstName, setFirstName] = useState('');
    const [validFirstName, setValidFirstName] = useState(false);
    const [fisrtNameFocus, setFirstNameFocus] = useState(false);
  
    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const currentUser = useSelector(state => state.user);

    const handleRegister = (e) => {
        e.preventDefault();
    
        UserService.updateDoctorForUser(currentUser,lastName ,firstName).then(_ => { //este un promise deci ca raspuns asteptam o eroare sau un mesaj de succes
         setSuccessMessage('Înregistarea realizată cu succes');
        }).catch(error => {
          console.log(error);
          if (!error?.response) {
            setErrorMessage('No server response');
            console.log("Eroare No server response: " + error);
          } else if (error.response?.status === 409) { // daca avem 409 inseamna CONFLICT, in cazul in care avem deja un user cu acelasi username
            setErrorMessage("username taken");
          } else {
            setErrorMessage('Registration Failed');
          }
          errorRef.current.focus();
        });
      };

    useEffect(() => {
      const result = USER_REGEX.test(firstName);
      setValidFirstName(result);
    },[firstName])

    useEffect(() => {
      const result = WORDS_ONLY.test(lastName);
      setValidLastName(result);
    },[lastName])

    useEffect(() => {
      if(successMessage) {
        const timeout = setTimeout(() => {
          setSuccessMessage('');
        },3000);
        return () => clearTimeout(timeout);
      }

      if(errorMessage) {
        const timeout = setTimeout(() => {
          setErrorMessage('');
        },3000);
        return () => clearTimeout(timeout);
      }
    },[successMessage,errorMessage])

    return (
        <div className='container mt-5' style={{maxWidth: '500px'}}>
      {/*className='card ms-auto me-auto p-3 shadow-lg custom-card'*/}
      <div className="card ms-auto me-auto p-4 shadow-lg custom-card">
       <div><h4 className="text-center">Completați următoarele câmpuri cu datele medicului de familie</h4></div>
        <p ref={errorRef} className={errorMessage ? "errorMsg" : "offscreen"} aria-live='assertive'>{errorMessage}</p>
        {
          successMessage &&
            <div className="alert alert-success">{successMessage}</div>
        }
        <form onSubmit={(e) => handleRegister(e)}>
          {/* <div className='form-group'>
            <label htmlFor='name'>Full Name:</label>
            <input
              type="text"
              name='name'
              className='form-control'
              placeholder='name'
              value={user.name}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className='invalid-feedback'>
              Invalid name
            </div>
          </div> */}

          <div className='form-group'>
            <label htmlFor='firstName'>Prenume:</label>
            <input
              type="text"
              name='firstName'
              className='form-control'
              placeholder='Prenume'
              //value={user.firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              //aria-invalid={validFirstName ? "false" : "true"}
              onFocus={() => setFirstNameFocus(true)}
              onBlur={() => setFirstNameFocus(false)}
            />
            <div className='invalid-feedback'>
              Invalid name
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='lastName'>Nume:</label>
            <input
              type="text"
              name='lastName'
              className='form-control'
              placeholder='Nume'
              //value={user.lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              //aria-invalid={validLastName ? "false" : "true"}
              onFocus={() => setLastNameFocus(true)}
              onBlur={() => setLastNameFocus(false)}
            />
            <div className='invalid-feedback'>
              Invalid name
            </div>
          </div>
{/* disabled={!validFirstName || !validLastName ? true : false} */}
          <button className='btn btn-info w-100 mt-3 border-button' disabled={!validFirstName || !validLastName? true : false} style={{background: 'darkslategray', color:'white'}} >
            Adaugă Doctor
          </button>
        </form>
      </div>
    </div>
    )
}
export default UserPage;