import React from 'react'
// import { SpinnerLoading } from '../Utils/SpinnerLoading';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../images/logo3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faUserCircle, faTable, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import {Role} from '../models/Role';

function Navbar() {
    
    const currentUser = useSelector(state => state.user);

    return (
        <nav className='navbar'>
            <div className='inside-navbar'>
                <div className='image'>
                    <Link to="/home" className='logo-link'>
                        <img src={logo} alt="Logo" className='logo' />
                    </Link>
                </div>

                <ul className='navbar-buttons'>
                    {/* <li>
                        <NavLink href='/profile' className='nav-link'>
                             <FontAwesomeIcon icon={faHamburger} className='navbar-buttons-icon' />
                             <p> Dashboard</p>
                        </NavLink>
                    </li> */}
                    {currentUser?.role === Role.DOCTORFAM  &&
                        <li>
                        <NavLink to='/profile/doctor' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Profile</p>
                        </NavLink>
                        </li>
                    }
                    {currentUser?.role === Role.DOCTORSPITAL  &&
                        <li>
                        <NavLink to='/profile/doctor' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Profile</p>
                        </NavLink>
                        </li>
                    }

                    {currentUser?.role === Role.USER && 
                        <li>
                        <NavLink to='/profile' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Profil</p>
                        </NavLink>
                        </li>
                    }

                    {currentUser?.role === Role.USER && 
                        <li>
                        <NavLink to='/user/page' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Actualizează Medic</p>
                        </NavLink>
                    </li>
                    }

                    {currentUser?.role === Role.DOCTORFAM && 
                        <li>
                        <NavLink to='/doctor/page' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Creeare Trimitere</p>
                        </NavLink>
                        </li>
                    }


                    {currentUser?.role === Role.USER &&
                        <li>
                        <NavLink to='/user/programare' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Programări</p>
                        </NavLink>
                        </li>

                    }


                    {currentUser?.role === Role.DOCTORSPITAL &&
                        <li>
                        <NavLink to='/doctor/spital/page' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>View Programari</p>
                        </NavLink>
                        </li>
                    }

                    {currentUser?.role === Role.ADMIN && 
                        <li>
                        <NavLink to='/profile' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Admin</p>
                        </NavLink>
                    </li>
                    }

                    {currentUser?.role === Role.ADMIN &&
                        <li>
                        <NavLink to='/admin' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>AdminDashboard</p>
                        </NavLink>
                        </li>
                    }

                    {currentUser?.role === Role.USER && 
                        <li>
                        <NavLink to='/user/prescriere' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Prescrieri</p>
                        </NavLink>
                        </li>
                    }

                    {currentUser?.role === Role.USER &&
                        <li>
                        <NavLink to='/user/trimitere' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Trimiteri</p>
                        </NavLink>
                        </li>
                    }

                    {currentUser?.role === Role.USER && 
                        <li>
                        <NavLink to='/user/farmacii' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Farmacii</p>
                        </NavLink>
                        </li>
                    }

                    {currentUser?.role === Role.USER &&
                        <li>
                        <NavLink to='/user/raspuns' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Răspunsuri</p>
                        </NavLink>
                        </li>

                    }           

                    
                    
                    {currentUser?.role === Role.FARMACIST && 
                        <li>
                        <NavLink to='/profile/farmacist' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Profil</p>
                        </NavLink>
                        </li>
                    }

                    {currentUser?.role === Role.FARMACIST &&
                        <li>
                        <NavLink to='/farmacist/page' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Prescrieri </p>
                        </NavLink>
                        </li>
                    }

                    {currentUser?.role === Role.FARMACIST && 
                        <li>
                        <NavLink to='/farmacist/alegere' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Farmacii</p>
                        </NavLink>
                        </li>
                    }

                    
                    
                    {/* <li>
                        <NavLink to='/profile' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Dashboard</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile' className='nav-link'>
                            <FontAwesomeIcon icon={faTable} className='navbar-buttons-icon' />
                            <p>Dashboard</p>
                        </NavLink>
                    </li> */}

                   
                    
                    
                    <div className='active'></div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar