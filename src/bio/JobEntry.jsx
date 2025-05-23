import React from 'react';

const JobEntry = ({ dates, company, role, responsibilities, projects }) => {
  return (
    <div className="job-entry">
      <div className="job-dates">{dates}</div>
      <div className="job-details">
        <h3 className="job-company">{company}</h3>
        <p className="job-role">{role}</p>
        <ul className="job-responsibilities">
          {responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
        {projects && projects.length > 0 && (
          <div className="job-projects">
            <h4>Proyectos:</h4>
            <ul>
              {projects.map((project, index) => (
                <li key={index}>
                  <strong>Cliente: "{project.client}"</strong>
                  <br />
                  {project.description}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobEntry;