import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import ProFastLogo from '../ProfastLogo/ProFastLogo';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/coverage'>Coverage</NavLink></li>
        <li><NavLink to='/sendParcel'>Send Parcel</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
    </>

    const handleLogout = () => {
        // logout function will be here
        logOut()
            .then(res => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => console.error(err));
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <sub className="btn btn-ghost text-xl ">
                    <ProFastLogo></ProFastLogo>
                </sub>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            {
                user ? <button onClick={handleLogout} className='btn navbar-end btn-secondary'>  Logout</button> : (<div className="navbar-end">
                    <Link to='/login'><button className='btn bg-green-500'>Login</button></Link>
                </div>)
            }
        </div>
    );
};

export default Navbar;