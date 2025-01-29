import React from 'react';
import DoctorList from '../components/DoctorList';
import DoctorForm from '../components/DoctorForm';

const Doctors = () => {
    return (
        <div className="p-6">
            <DoctorForm />
            <DoctorList />
        </div>
    );
};

export default Doctors;
