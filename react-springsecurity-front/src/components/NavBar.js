import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import { clearCurrentUser } from '../redux/actions/UserActions';
import { Role } from '../models/Role';

function NavBar() {

    const currentUser = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(clearCurrentUser());
        navigate('/login');
    }
    return (
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <a href='https://reactjs.org/' className='navbar-brand ms-1'>
                <img src={logo} alt="logo" className='App-logo'></img>
                React Logo
            </a>

            <div className='navbar-nav me-auto'>
                {currentUser?.role === Role.ADMIN && // aratam linkul de ADMIN doar daca userul este ADMIN
                    <li className='nav-item'>
                        <Link to="/admin" className='nav-link'>
                            Admin
                        </Link>
                    </li>
                }

                <li className='nav-item'>
                    <Link to="/home" className='nav-link'>
                        Home
                    </Link>
                </li>
            </div>

            {!currentUser && // aratam linkurle de sign up si sign in doar daca nu avem un user logat
                <div className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <Link to="register" className='nav-link'>
                            Sign up
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="login" className='nav-link'>
                            Sign in
                        </Link>
                    </li>
                </div>
            }

            {currentUser && // daca avem un user logat atunci ii afisam numele si butonul de logout
                <div className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <Link to="register" className='nav-link'>
                            {currentUser.name}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link' onClick={() => logout()}>
                            Sign Out
                        </a>
                    </li>
                </div>
            }

        </nav>
    )
}

export default NavBar