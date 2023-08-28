import React, { useEffect, useState } from "react"
import { useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faInfoCircle, faMortarPestle, faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import AuthenticationService from "../services/authentication.service";
import Farmacist from "../models/Farmacist";

function RegisterFarmacistPage() {

    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/; // trebuie sa inceapa cu o litera mica sau mare, dupa trebuie sa fie urmat intre 3 si 23 de caractere care sunt litere mici, mari, numere, liniuta sau bara jos
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; // cel putin o litera mica, una mare, un nr, un caracter special, si poate sa fie intre 8 si 24 de caractere

    const userRef = useRef();
    const errorRef = useRef();

    const [farmacist, setFarmacist] = useState(new Farmacist('','','','','','',''));

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

    const [firstName, setFirstName] = useState('');

    const [lastName, setLastName] = useState('');

    const [institutie, setInstitutie] = useState('');

    const [cnp, setCnp] = useState('');

    const [succesRegister, setSuccesRegister] = useState('');
    const[errorMessage, setErrorMessage]= useState('');

    useEffect(() => {
        userRef.current.focus(); // acest useEffect se rendeaza o singura data cand se incarca componenta si seteaza focus-ul pe user
    }, []);
    
    const currentFarmacist = useSelector(state => state.farmacist);

    const navigate = useNavigate();

    useEffect(() => {
        if (currentFarmacist?.id) { // daca exista un id de user, adica userul este logat este redirectionat spre pagina de profil
          // navigate('/profile');
        }
    
    }, []);


    useEffect(() => {
        setFarmacist(new Farmacist(username, password, firstName, lastName, institutie, cnp));
      }, [username, password, firstName, lastName, institutie, cnp]);
    
      useEffect(() => {
        const result = USER_REGEX.test(username);
        setValidUsername(result);
        //console.log("Username: " + result);
      }, [username])
    
      useEffect(() => {
        const result = PWD_REGEX.test(password);
        setValidPassword(result);
        //console.log("Parola: " + result)
        const match = password === confirmPassword;
        setValidConfirmPassword(match);
        console.log(match);
      }, [password, confirmPassword])

    const handleRegister = (e) => {
        e.preventDefault();
    
        // daca butonul este activat prin consola
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);
        if (!v1 || !v2) {
          setErrorMessage("Invalid Entry");
          return;
        }
        
        setSuccesRegister(true);
        // setSubmited(true);
    
        // setLoading(true);
    
        AuthenticationService.registerFarmacist(farmacist).then(_ => { //este un proise deci ca raspuns asteptam o eroare sau un mesaj de succes
          navigate('/login/farmacist'); // daca este un mesaj de succes
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



      return (
        <div className='container mt-5 login-form'>
          {/*className='card ms-auto me-auto p-3 shadow-lg custom-card'*/}
          <div className="card p-3 shadow-lg custom-card">
            <FontAwesomeIcon icon={faMortarPestle} className='container ms-auto me-auto custom-user-icon' />
    
            <p ref={errorRef} className={errorMessage ? "errorMsg" : "offscreen"} aria-live='assertive'>{errorMessage}</p>
            {succesRegister && <p className="alert alert-success">Contul a fost inregistrat cu succes</p>}
    
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
                <label htmlFor='username'>Username:
                  <span className={validUsername ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck} /></span>
                  <span className={validUsername || !username ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes} /></span>
                </label>
                <input
                  id='username'
                  type="text"
                  name='username'
                  autoComplete='off'
                  ref={userRef}
                  className='form-control'
                  placeholder='username'
                  //value={user.username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  aria-invalid={validUsername ? "false" : "true"}
                  onFocus={() => setUsernameFocus(true)}
                  onBlur={() => setUsernameFocus(false)}
                >
                </input>
              </div>
              <p className={usernameFocus && username && !validUsername ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters. <br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
    
              <div className="form-group">
                <label htmlFor="password">Password:
                  <span className={validPassword ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck} /></span>
                  <span className={validPassword || !password ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes} /></span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  //value={user.password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-invalid={validPassword ? "false" : "true"}
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                />
                <p id='pwdnote' className={passwordFocus && !validPassword ? "instructions" : "offscreen"}><FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters. <br />
                  Trebuie sa includa o litera mica si una mare, un numar si un caracter special.<br />
                  Caractere speciale permise: <span aria-label='exclamation mark'>!</span>
                  <span aria-label='at symbol'>@</span>
                  <span aria-label='hastag'>#</span>
                  <span aria-label='dollar sign'>$</span>
                  <span aria-label='percent'>%</span>
                </p>
              </div>
    
              <div className='form-group'>
                <label htmlFor='confirm'>Confirm Password:
                  <span className={validConfirmPassword && confirmPassword ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck} /></span>
                  <span className={validConfirmPassword || !confirmPassword ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes} /></span>
                </label>
                <input
                  id='confirm'
                  type="password"
                  name='confirm'
                  className='form-control'
                  placeholder='Retype Password'
                  //value={user.username}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  aria-invalid={validConfirmPassword ? "false" : "true"}
                  onFocus={() => setConfirmPasswordFocus(true)}
                  onBlur={() => setConfirmPasswordFocus(false)}
                >
                </input>
                <p id='confirmnote' className={confirmPasswordFocus && !validConfirmPassword ? "instructions" : "offscreen"}><FontAwesomeIcon icon={faInfoCircle} />
                  Trebuie sa fie la fel cu parola.
                </p>
              </div>
    
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
                />
                <div className='invalid-feedback'>
                  Invalid name
                </div>
              </div>
    
              <div className='form-group'>
                <label htmlFor='cnp'>CNP:</label>
                <input
                  type="text"
                  pattern="[0-9]*"
                  name='cnp'
                  className='form-control'
                  placeholder='CNP'
                  //value={user.cnp}
                  onChange={(e) => setCnp(e.target.value)}
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='institutie'>Institutie:</label>
                <input
                  type="text"
                  name='institutie'
                  className='form-control'
                  placeholder='Institutie'
                  //value={user.cnp}
                  onChange={(e) => setInstitutie(e.target.value)}
                  required
                />
              </div>

              {/* <div className='form-group'>
                <label htmlFor='pozaParafa'>Poza parafa:</label>
                <input
                  type="text"
                  name='pozaParafa'
                  className='form-control'
                  placeholder='CNP'
                  //value={user.cnp}
                  onChange={(e) => setPozaParafa(e.target.value)}
                  required
                />
              </div> */}
    
              <button className='btn btn-info w-100 mt-3 border-button' style={{background: 'darkslategray', color:'white'}} disabled={!validUsername || !validPassword || !validConfirmPassword ? true : false}>
                Sign Up
              </button>
            </form>
            
              <Link to="/login/farmacist" className='btn btn-link container' style={{ color: 'darkgrey' }}>
                Am deja un cont!
              </Link>
            
          </div>
        </div>
      )
}

export default RegisterFarmacistPage