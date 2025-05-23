import React from 'react';

const Section = ({ icon, title, children }) => {
  return (
    <section className="cv-section">
      <h2 className="section-title">
        {icon && <span className="section-icon">{icon}</span>}
        {title}
      </h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;