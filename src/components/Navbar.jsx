import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white shadow-lg">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-2xl font-bold">Doctor Appointment</h1>
                <div className="space-x-4">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/doctors" className="hover:text-gray-300">Doctors</Link>
                    <Link to="/users" className="hover:text-gray-300">Users</Link>
                    <Link to="/appointments" className="hover:text-gray-300">Appointments</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
