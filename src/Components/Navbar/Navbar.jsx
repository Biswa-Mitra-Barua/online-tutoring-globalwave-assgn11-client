import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const NavBar = () => {
    const { user, handleLogout } = useContext(authContext);
    const [showUserName, setShowUserName] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleUserName = () => {
        setShowUserName((prev) => !prev);
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className='p-4 bg-gray-700 relative z-50'>
            <div className='flex justify-between items-center'>
              
                <div className='flex items-center gap-4'>
                    <button
                        onClick={toggleMenu}
                        className='md:hidden text-white focus:outline-none'
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                    <Link to='/' className='text-2xl md:text-4xl md:mr-20 font-bold text-slate-300'>
                        <span className="text-white">Global</span>Wave
                    </Link>
                </div>

                <div
                    className={`${
                        menuOpen ? 'flex' : 'hidden'
                    } absolute top-full left-0 w-full bg-gray-800 md:bg-transparent md:static md:flex md:flex-row flex-col md:items-center gap-4 px-4 py-4 md:py-0`}
                >
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `text-gray-300 text-sm md:text-base hover:text-sky-400 ${isActive ? 'text-sky-400 font-semibold' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/find-tutors'
                        className={({ isActive }) =>
                            `text-gray-300 text-sm md:text-base hover:text-sky-400 ${isActive ? 'text-sky-400 font-semibold' : ''}`
                        }
                    >
                        Find Tutors
                    </NavLink>
                    <NavLink
                        to='/addTutorials'
                        className={({ isActive }) =>
                            `text-gray-300 text-sm md:text-base hover:text-sky-400 ${isActive ? 'text-sky-400 font-semibold' : ''}`
                        }
                    >
                        Add Tutorials
                    </NavLink>
                    <NavLink
                        to='/myTutorials'
                        className={({ isActive }) =>
                            `text-gray-300 text-sm md:text-base hover:text-sky-400 ${isActive ? 'text-sky-400 font-semibold' : ''}`
                        }
                    >
                        My Tutorials
                    </NavLink>
                    <NavLink
                        to='/myBookedTutors'
                        className={({ isActive }) =>
                            `text-gray-300 text-sm md:text-base hover:text-sky-400 ${isActive ? 'text-sky-400 font-semibold' : ''}`
                        }
                    >
                        My Booked Tutors
                    </NavLink>
                </div>

                <div className='flex items-center gap-4'>
                    <ThemeToggle />
                    {user?.photoURL && (
                        <div className='relative'>
                            <button onClick={handleUserName}>
                                <img
                                    className='w-10 h-10 rounded-full border-2 border-sky-500 object-cover'
                                    src={user.photoURL}
                                    title={user.displayName || 'User'}
                                />
                            </button>
                            {showUserName && (
                                <div className="absolute right-0 mt-2 px-3 py-1 bg-white text-black text-sm rounded shadow">
                                    {user.displayName}
                                </div>
                            )}
                        </div>
                    )}

                    {user ? (
                        <button
                            onClick={handleLogout}
                            className='btn btn-sm btn-neutral text-white rounded-full'
                        >
                            Logout
                        </button>
                    ) : (
                        <div className='flex gap-2'>
                            <Link to='/login' className='btn btn-sm btn-neutral text-white rounded-full'>
                                Login
                            </Link>
                            <Link to='/register' className='btn btn-sm btn-neutral text-white rounded-full'>
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
