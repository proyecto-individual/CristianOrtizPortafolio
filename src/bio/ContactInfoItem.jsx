import React from 'react';

const ContactInfoItem = ({ icon, text }) => {
  return (
    <div className="contact-info-item">
      <span className="contact-icon">{icon}</span>
      <span className="contact-text">{text}</span>
    </div>
  );
};

export default ContactInfoItem;