import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const NavBar = () => {
    const { user, handleLogout } = useContext(authContext);
    // console.log(user)
    const [showUserName, setShowUserName] = useState(false);

    const handleUserName = () => {
        setShowUserName((prev) => !prev);
    }

    return (
        <div className='p-6'>
            <div className='flex justify-between items-center'>
                {/* Logo */}
                <div>
                    <Link to='/' className='text-4xl font-bold neon '><span className="font-extrabold">Global</span>Wave</Link>
                </div>
                {/* Nav Links */}
                <div className='hidden md:flex space-x-6'>
                    <NavLink to='/' activeClassName="text-sky-500 font-semibold" className="text-gray-600 hover:text-sky-500 transition-colors">Home</NavLink>
                    <NavLink to='/find-tutors' activeClassName="text-sky-500 font-semibold" className="text-gray-600 hover:text-sky-500 transition-colors">Find Tutors</NavLink>
                    <NavLink to='/addTutorials' activeClassName="text-sky-500 font-semibold" className="text-gray-600 hover:text-sky-500 transition-colors">Add Tutorials</NavLink>
                    <NavLink to='/myTutorials' activeClassName="text-sky-500 font-semibold" className="text-gray-600 hover:text-sky-500 transition-colors">My Tutorials</NavLink>
                    <NavLink to='/myBookedTutors' activeClassName="text-sky-500 font-semibold" className="text-gray-600 hover:text-sky-500 transition-colors">My Booked Tutors</NavLink>
                </div>

                {/* User */}
                <div className='flex items-center gap-4'>
                    <div>
                        <ThemeToggle></ThemeToggle>
                    </div>
                    <div className='relative'>
                        {user?.photoURL &&
                            <>
                                <button onClick={handleUserName}>
                                    <img className='w-12 h-12 rounded-full border-2 border-sky-500 hover:shadow-lg cursor-pointer'
                                        src={user.photoURL}
                                        title={user?.displayName || 'User'}>
                                    </img>
                                </button>
                                {showUserName && (
                                    <div className="absolute right-0 mt-2 px-2 py-2 bg-white text-black rounded shadow pointer-events-none">
                                        {user.displayName}
                                    </div>)
                                }
                            </>

                        }
                    </div>

                    {
                        user && user?.email ?
                            (<button onClick={handleLogout} className='btn btn-neutral rounded-full px-6 py-2 font-semibold text-white hover:bg-sky-500 transition-colors"'>Logout</button>) :
                            <div className='space-x-4'>
                                <Link to='/login' className="btn btn-neutral rounded-full px-6 py-2 font-semibold text-white hover:bg-sky-500 transition-colors">Login</Link>
                                <Link to='/register' className="btn btn-neutral rounded-full px-6 py-2 font-semibold text-white hover:bg-sky-500 transition-colors">Register</Link>
                            </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default NavBar;