import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { FiChevronDown } from 'react-icons/fi';
import { FaUserCircle, FaEdit, FaSignOutAlt } from "react-icons/fa";
import useLogout from '../hooks/useLogout';

const Navbar = ({ isAuthenticated }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    }

    return (
        <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold hover:text-gray-400">
                    MyBlog
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-6 items-center">
                    <li>
                        <Link to="/" className="hover:text-gray-400">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="hover:text-gray-400">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-400">
                            About
                        </Link>
                    </li>
                    {isAuthenticated ? (
                        <li className="relative">
                            <img
                                alt="tania andrew"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                className="relative inline-block h-10 w-10 cursor-pointer rounded-full object-cover object-center"
                                onClick={toggleDropdown}
                            />

                            {/* Dropdown Menü */}
                            {isProfileMenuOpen && (
                                <ul
                                    role="menu"
                                    className="absolute z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-sm focus:outline-none"
                                >
                                    <li
                                        role="menuitem"
                                        className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                                    >
                                        <FaUserCircle className="w-5 h-5 text-slate-400" />
                                        <p className="text-slate-800 font-medium ml-2">My Profile</p>
                                    </li>

                                    <li
                                        role="menuitem"
                                        className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                                    >
                                        <FaEdit className="w-5 h-5 text-slate-400" />
                                        <p className="text-slate-800 font-medium ml-2">Edit Profile</p>
                                    </li>

                                    <li
                                        role="menuitem"
                                        className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                                    >
                                        <FaEdit className="w-5 h-5 text-slate-400" />
                                        <Link to='/write-blog' className='text-slate-800 font-medium ml-2'>
                                            Write Blog
                                        </Link>
                                    </li>

                                    <hr className="my-2 border-slate-200" role="menuitem" />

                                    <li
                                        role="menuitem"
                                        className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                                        onClick={toggleDropdown}
                                    >
                                        <Logout/>
                                    </li>
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li>
                            <Link to="/login" className="hover:text-gray-400">
                                Login
                            </Link>
                        </li>
                    )}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="md:hidden bg-gray-800 text-white space-y-2 px-6 py-4">
                    <li>
                        <Link to="/" className="block hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="block hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="block hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
                            About
                        </Link>
                    </li>
                    {isAuthenticated ? (
                        <li className="relative">
                            <button
                                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                className="block hover:text-gray-400 focus:outline-none flex items-center"
                            >
                                Profile
                                <FiChevronDown className="ml-1" />
                            </button>
                            {isProfileMenuOpen && (
                                <div className="bg-gray-800 text-white rounded-md px-4 py-2 space-y-2">
                                    <Link
                                        to="/profile"
                                        className="block hover:text-gray-400"
                                        onClick={() => setIsProfileMenuOpen(false)}
                                    >
                                        My Profile
                                    </Link>
                                    <Link
                                        to="/writeblog"
                                        className="block hover:text-gray-400"
                                        onClick={() => setIsProfileMenuOpen(false)}
                                    >
                                        Write Blog
                                    </Link>
                                    <button
                                        onClick={() => {
                                            setIsProfileMenuOpen(false);
                                            // Logout action here
                                        }}
                                        className="block w-full text-left hover:text-gray-400"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </li>
                    ) : (
                        <li>
                            <Link to="/login" className="block hover:text-gray-400" onClick={() => setIsMenuOpen(false)}>
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            )}
        </nav>
    );
};


export default Navbar;
