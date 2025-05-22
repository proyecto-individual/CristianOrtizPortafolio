import React from 'react';

const InternshipEntry = ({ dates, organization, description, coverages }) => {
  return (
    <div className="internship-entry">
      <div className="internship-dates">{dates}</div>
      <div className="internship-details">
        <h3 className="internship-organization">{organization}</h3>
        <p className="internship-description">{description}</p>
        {coverages && coverages.length > 0 && (
          <div className="internship-coverages">
            <h4>Últimas coberturas:</h4>
            <ul>
              {coverages.map((coverage, index) => (
                <li key={index}>{coverage}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternshipEntry;