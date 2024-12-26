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
        <div className='p-8 bg-gray-700'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <button
                        onClick={toggleMenu}
                        className='block md:hidden text-gray-600 focus:outline-none'
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                    {/* Logo */}
                    <Link to='/' className='text-2xl lg:text-4xl font-bold'>
                        <span className="font-extrabold">Global</span>Wave
                    </Link>
                </div>

                <div
                    className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex space-y-4 md:space-y-0 flex-col md:flex-row items-center md:space-x-4 p-4 md:p-0 transition-transform duration-300 ${menuOpen ? 'block' : 'hidden'}`}
                >
                    <NavLink
                        to='/'
                        activeClassName="text-sky-500 font-semibold"
                        className="text-gray-300 hover:text-sky-500 transition-colors"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/find-tutors'
                        activeClassName="text-sky-500 font-semibold"
                        className="text-gray-300 hover:text-sky-500 transition-colors"
                    >
                        Find Tutors
                    </NavLink>
                    <NavLink
                        to='/addTutorials'
                        activeClassName="text-sky-500 font-semibold"
                        className="text-gray-300 hover:text-sky-500 transition-colors"
                    >
                        Add Tutorials
                    </NavLink>
                    <NavLink
                        to='/myTutorials'
                        activeClassName="text-sky-500 font-semibold"
                        className="text-gray-300 hover:text-sky-500 transition-colors"
                    >
                        My Tutorials
                    </NavLink>
                    <NavLink
                        to='/myBookedTutors'
                        activeClassName="text-sky-500 font-semibold"
                        className="text-gray-300 hover:text-sky-500 transition-colors"
                    >
                        My Booked Tutors
                    </NavLink>
                </div>

                <div className='flex flex-col lg:flex-row items-center gap-2'>
                    <ThemeToggle />
                    <div className='relative'>
                        {user?.photoURL && (
                            <>
                                <button onClick={handleUserName}>
                                    <img
                                        className='w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-sky-500 hover:shadow-lg cursor-pointer object-cover'
                                        src={user.photoURL}
                                        title={user?.displayName || 'User'}
                                    />
                                </button>
                                {showUserName && (
                                    <div className="absolute right-0 mt-2 px-2 py-2 bg-white text-black rounded shadow">
                                        {user.displayName}
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {user && user?.email ? (
                        <button
                            onClick={handleLogout}
                            className='btn btn-neutral rounded-full px-6 py-2 font-semibold text-white hover:bg-sky-500 transition-colors'
                        >
                            Logout
                        </button>
                    ) : (
                        <div className='space-x-4'>
                            <Link
                                to='/login'
                                className="btn btn-neutral rounded-full px-6 py-2 font-semibold text-white hover:bg-sky-500 transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                to='/register'
                                className="btn btn-neutral rounded-full px-6 py-2 font-semibold text-white hover:bg-sky-500 transition-colors"
                            >
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
