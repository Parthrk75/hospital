import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [userId, setUserId] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formattedDate = `${appointmentDate}T00:00:00`; // Assuming user inputs date in YYYY-MM-DD format, adjust time as needed.

    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post('/api/appointment/add', null, {
        params: {
          userId,
          doctorId,
          appointmentDate: formattedDate,
        }
      });
      console.log('Appointment successfully booked:', response.data);
      // You can handle success, e.g., display a success message to the user
    } catch (err) {
      console.error('Error booking appointment:', err);
      setError('Something went wrong, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appointment-form">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="number"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="doctorId">Doctor ID</label>
          <input
            type="number"
            id="doctorId"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="appointmentDate">Appointment Date</label>
          <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>

        {loading && <p>Submitting...</p>}
        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>Submit</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
