import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import AuthenticationService from '../../services/AuthenticationService';
import './RegisterPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function RegisterPage() {

  const [user, setUser] = useState(new User('', '', ''));
  const [loading, setLoading] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // luam user-ul din reducers
  const currentUser = useSelector(state => state.user); // useSelector = hook pt ReactRedux, Use Selector = ofera state ca si input si putem accesa userul curent din state

  const navigate = useNavigate();

  //mounted = useEffect fara dependency, care se apeleaza doar cand componenta se instantiaza
  useEffect(() => {
    if (currentUser?.id) { // daca exista un id de user, adica userul este logat este redirectionat spre pagina de profil
      navigate('/profile');
    }

  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target; // din event luam valorile pt name si value

    setUser((prevState => {
      return {
        ...prevState,
        [name]: value
      };
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    setSubmited(true);

    if (!user.username || !user.password || !user.name) {
      return;
    }

    setLoading(true);

    AuthenticationService.register(user).then(_ => { //este un proise deci ca raspuns asteptam o eroare sau un mesaj de succes
      navigate('/login'); // daca este un mesaj de succes
    }).catch(error => {
      console.log(error);
      if (error?.response?.status === 409) { // daca avem 409 inseamna CONFLICT, in cazul in care avem deja un user cu acelasi username
        setErrorMessage("username invalid");
      } else {
        setErrorMessage('Eroare neprevazuta');
      }
      setLoading(false);
    });
  };



  return (
    <div className='container mt-5'>
      <div className='card ms-auto me-auto p-3 shadow-lg custom-card'>
        <FontAwesomeIcon icon={faUserCircle} className='ms-auto me-auto custom-user-icon' />

        {errorMessage &&

          <div className='aler aler-danger'>
            {errorMessage}
          </div>
        }

        <form onSubmit={(e) => handleRegister(e)} noValidate className={submited ? 'was-validated' : ''}>
          <div className='form-group'>
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
          </div>

          <div className='form-group'>
            <label htmlFor='username'>Username:</label>
            <input
              type="text"
              name='username'
              className='form-control'
              placeholder='username'
              value={user.username}
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
              value={user.password}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="invalid-feedback">
              Password is required.
            </div>
          </div>

          <button className='btn btn-info w-100 mt-3' disabled={loading}>
            Sign Up
          </button>
        </form>

        <Link to="/login" className='btn btn-link' style={{color:'darkgrey'}}>
          I have an Account!
        </Link>
      </div>
    </div>
  )
}

export default RegisterPage