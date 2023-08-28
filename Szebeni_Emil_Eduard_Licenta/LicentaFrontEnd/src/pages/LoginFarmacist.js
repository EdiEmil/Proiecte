import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import User from '../models/User';
import AuthenticationService from '../services/authentication.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faMortarPestle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { setCurrentUser } from '../redux-store/actions/user';
import Farmacist from '../models/Farmacist';
import background from '../images/background.png';


function LoginFarmacistPage() {

  //const [doctor, setDoctor] = useState(new User('', '', ''));
  const [farmacist, setFarmacist] = useState(new Farmacist('', '', ''));

  const [statusButton, setStatusButton] = useState(false);

  const [loading, setLoading] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // luam user-ul din reducers
  const currentUser = useSelector(state => state.user); // useSelector = hook pt ReactRedux, Use Selector = ofera state ca si input si putem accesa userul curent din state

  const navigate = useNavigate();

  const dispatch = useDispatch(); // pt a da update la session user

  //mounted = useEffect fara dependency, care se apeleaza doar cand componenta se instantiaza
  useEffect(() => {
    if (currentUser?.id) { // daca exista un id de user, adica userul este logat este redirectionat spre pagina de profil
        navigate('/profile/farmacist');
    }

  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target; // din event luam valorile pt name si value
    setFarmacist((prevState => {
      return {
        ...prevState,
        [name]: value
      };
    }));
  };

  const handleDoctorLogin = (e) => {
    e.preventDefault();

    setSubmited(true);

    if (!farmacist.username || !farmacist.password) {
      return;
    }

    setLoading(true);

    AuthenticationService.loginFarmacist(farmacist).then(response => {
      //set user in session
      dispatch(setCurrentUser(response.data));
      navigate('/profile/farmacist');
    }).catch(error => {
      console.log(error);
      setErrorMessage('Username sau parolă invalide');
      setLoading(false);
    })
  }

  return (
      <div className='container mt-5'>
        <div className='card ms-auto me-auto p-3 shadow-lg custom-card'>
          <FontAwesomeIcon icon={faMortarPestle} className='ms-auto me-auto custom-user-icon' />

          {errorMessage &&

            <div className='alert alert-danger' style={{marginTop:'10px'}}>
              {errorMessage}
          </div>
          }

          <form onSubmit={(e) => handleDoctorLogin(e)} >

            <div className='form-group'>
              <label htmlFor='username'>Username:</label>
              <input
                type="text"
                name='username'
                className='form-control'
                placeholder='username'
                value={farmacist.username}
                onChange={(e) => handleChange(e)}
                required
              />
              <div className='invalid-feedback'>
                <p>Invalid username</p>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="password"
                value={farmacist.password}
                onChange={(e) => handleChange(e)}
                required
              />
              <div className="invalid-feedback">
                Password is required.
              </div>
            </div>

            <button className='btn btn-info w-100 mt-3 border-button' style={{background: 'darkslateGray', color:'white'}} disabled={loading}>
              Sign In
            </button>
          </form>

          <Link to="/register/farmacist" className='btn btn-link' style={{ color: 'darkgrey' }}>
            Creează un cont nou!
          </Link>
        </div>
      </div>
  )
}

export default LoginFarmacistPage