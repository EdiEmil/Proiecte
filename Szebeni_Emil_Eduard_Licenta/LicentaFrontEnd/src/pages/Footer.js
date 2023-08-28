import React from 'react'

function Footer() {
    return (
        <div className='main-color'>
            <footer className='container'>
                <div className='d-flex flex-wrap 
            justify-content-between align-items-center py-5 main-color'>

                    <div className='col-md-4 mb-0 text-white'>
                        <h4>Contact</h4>
                        <ul className='list-unstyled'>
                            <li>cev1</li>
                            <li>ceva2</li>
                        </ul>
                    </div>

                    <p className='col-md-4 mb-0 text-white'>&copy; {new Date().getFullYear()} My App - All Rights Reserved</p>


                    <ul className='nav navbar-dark col-md-4 justify-content-end'>
                        <li className='nav-item'>
                            <button  className='btn btn-outline-light'>Un button </button>
                        </li>
                        <li className='nav-item'>
                            <button className='nav-link px-2 text-white'>Un buuton</button>
                        </li>
                    </ul>
                </div>
                <div>
                </div>
            </footer>

        </div>
    );
}

export default Footer