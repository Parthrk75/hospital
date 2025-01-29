import React, { useState } from 'react';
import axios from 'axios';

const DoctorForm = () => {
  const [doctor, setDoctor] = useState({
    name: '',
    specialization: '',
    email: '',
    phoneNumber: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    return doctor.name && doctor.specialization && doctor.email && doctor.phoneNumber;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setIsLoading(true);

    axios
      .post('http://localhost:8080/api/doctor/add', doctor)
      .then((response) => {
        alert('Doctor added successfully!');
        setDoctor({ name: '', specialization: '', email: '', phoneNumber: '' });
      })
      .catch((error) => {
        console.error('Error adding doctor!', error);
        setError('Error adding doctor! Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form className="p-6 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Add Doctor</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={doctor.name}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        name="specialization"
        placeholder="Specialization"
        value={doctor.specialization}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={doctor.email}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone"
        value={doctor.phoneNumber}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
        disabled={isLoading}
      >
        {isLoading ? 'Adding Doctor...' : 'Add Doctor'}
      </button>
    </form>
  );
};

export default DoctorForm;
