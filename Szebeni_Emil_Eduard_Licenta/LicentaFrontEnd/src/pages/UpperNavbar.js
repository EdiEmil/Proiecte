import React from 'react'
// import { SpinnerLoading } from '../Utils/SpinnerLoading';
import { NavLink, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../images/logomed2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faUserCircle, faTable, faHamburger, faUser, faStethoscope, faMortarPestle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux'
import { clearCurrentDoctor, clearCurrentUser } from '../redux-store/actions/user'
import { Role } from '../models/Role'

function UpperNavbar() {

    const currentUser = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(clearCurrentUser());
        dispatch(clearCurrentDoctor());
    };

    return (
        <div className='navbar navbar-expand-lg upper-navbar'>
            <ul className='navbar-nav ms-auto'>
                {((currentUser?.role === Role.DOCTORSPITAL) || (currentUser?.role === Role.DOCTORFAM) || (currentUser?.role === Role.USER) || (currentUser?.role === Role.ADMIN) || (currentUser?.role === Role.FARMACIST))&&
                    <li className='nav-item m-2'>
                        <h4 className='m-0 p-0 fw-bold  text-uppercase upper-navbar-name'>{currentUser?.lastName}</h4>
                    </li>
                }
                <li className='nav-item m-1'>
                {currentUser?.role === Role.DOCTORSPITAL && 
                    <Link type='button' className='btn btn-outline-light' to='/login/doctor' onClick={() => logout()} > <FontAwesomeIcon icon={faStethoscope}/>Sign out</Link>
                }
                {currentUser?.role === Role.DOCTORFAM &&
                    <Link type='button' className='btn btn-outline-light' to='/login/doctor' onClick={() => logout()} > <FontAwesomeIcon icon={faStethoscope}/>Sign out</Link>
                }
                {currentUser?.role === Role.USER &&
                    <Link type='button' className='btn btn-outline-light' to='/login' onClick={() => logout()} > <FontAwesomeIcon icon={faUser}/>Sign out</Link>
                }
                {currentUser?.role === Role.ADMIN &&
                    <Link type='button' className='btn btn-outline-light' to='/login' onClick={() => logout()} > <FontAwesomeIcon icon={faUser}/>Sign out</Link>
                }
                {currentUser?.role === Role.FARMACIST && 
                     <Link type='button' className='btn btn-outline-light' to='/login/farmacist' onClick={() => logout()} > <FontAwesomeIcon icon={faMortarPestle}/>Sign out</Link>
                }
                </li>
                
                {currentUser?.role === undefined &&
                        <li className='nav-item m-1'>
                            <Link type='button' className='btn btn-outline-light' to='/login'> <FontAwesomeIcon icon={faUser}/>Pacient</Link>
                        </li> 
                }
                {/* {currentUser?.role === undefined &&
                        <li className='nav-item m-3'>
                            <Link type='button' className='btn btn-outline-light' to='/login'> <FontAwesomeIcon icon={faUser}/>Admin</Link>
                        </li> 
                } */}
                {currentUser?.role === undefined &&
                    <li className='nav-item m-1'>
                        <Link type='button' className='btn btn-outline-light' to='/login/doctor'> <FontAwesomeIcon icon={faStethoscope}/>Doctor</Link>
                    </li>
                }
                {currentUser?.role === undefined &&
                        <li className='nav-item m-1'>
                            <Link type='button' className='btn btn-outline-light' to='/login/farmacist'> <FontAwesomeIcon className='upper-navbar-icons' icon={faMortarPestle}/>Farmacist</Link>
                        </li> 
                }
            </ul>
             
            {/* btn-outline-light */}
        </div>
    )
}
export default UpperNavbar