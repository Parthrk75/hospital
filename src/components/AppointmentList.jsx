import React, { useState, useEffect } from "react";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/appointment/all") // Changed to match your controller's endpoint
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load appointments");
        setLoading(false);
      });
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(); // Formatting the date to 'MM/DD/YYYY'
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Appointments"
        className="p-2 border rounded"
        onChange={(e) => setSearch(e.target.value)}
      />
      
      {loading && <p>Loading appointments...</p>}
      {error && <p className="error">{error}</p>}

      <ul>
        {appointments
          .filter((appointment) =>
            appointment.doctor.toLowerCase().includes(search.toLowerCase())
          )
          .map((appointment) => (
            <li key={appointment.id} className="p-2 border-b">
              <strong>{appointment.doctor}</strong> - {formatDate(appointment.appointmentDate)}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
