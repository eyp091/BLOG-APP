import React from 'react'
import { FaSignOutAlt } from "react-icons/fa";
import useLogout from '../hooks/useLogout.js';

const Logout = () => {

    const { loading, logout } = useLogout();

    return (
        <div className='mt-auto'>
            {!loading ? (
                <div className="flex items-center cursor-pointer" onClick={logout}>
                    <FaSignOutAlt className="w-5 h-5 text-slate-400" />
                    <p className="text-slate-800 font-medium ml-2">Logout</p>
                </div>

            ) : (
                <span className='loading loading-spinner'></span>
            )}
        </div>
    )
}

export default Logout