import React from 'react';

const EducationEntry = ({ dates, institution, location, title, status, years }) => {
  return (
    <div className="education-entry">
      <div className="education-dates">{dates}</div>
      <div className="education-details">
        <h3 className="education-institution">{institution}</h3>
        <p className="education-location">{location}</p>
        <p className="education-title">Título a lograr al culminar la carrera: "{title}"</p>
        <p className="education-status">{status}</p>
        {years && <p className="education-years">Años cursados: {years}</p>}
      </div>
    </div>
  );
};

export default EducationEntry;