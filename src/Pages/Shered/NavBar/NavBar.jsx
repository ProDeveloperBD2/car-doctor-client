import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2'

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleUserLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Sign Out it!'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                    
                        Swal.fire(
                            'Sign Out!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
                    .catch(error => console.log(error))
            }
        })
    }
    const navItems = <>
        <li className='font-semibold text-lg'><Link to="/">Home</Link></li>
        <li className='font-semibold text-lg'><Link to="/about">About</Link></li>
        <li className='font-semibold text-lg'><Link to="/services">Services</Link></li>
        {user?.email ?
            <>
                <li><Link className='font-semibold text-lg' to="/booking">My Bookings</Link></li>
                <li><button className='font-semibold text-lg' onClick={handleUserLogOut}>Sign Out</button></li>
            </> : <li className='font-semibold text-lg'><Link to="/login">Login</Link></li>}
        <li className='font-semibold text-lg'><Link>Contact</Link></li>
    </>;
    return (
        <div className='bg-white'>
            <div className="navbar text-black max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="ps-4 normal-case text-xl"><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="bg-[orangered] text-xl font-semibold py-2 rounded text-white px-3">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;