import React from 'react';
import profileImage from '../../public/img/contact/fotoPerfil.jpg';
import ContactInfoItem from './ContactInfoItem';

const ProfileImage = () => {
  return (
    <div className="header-section">
      <div className="profile-image-container">
        <img src={profileImage} alt="Cristhian Ortiz" className="profile-image" />
      </div>
      {/* <h1 className="header-name">CRISTHIAN ORTIZ</h1> */}
      <ContactInfoItem text={<a style={{ color: 'white', textDecoration: 'underline' }} href="https://www.instagram.com/poorstreet.peru" target="_blank" rel="noopener noreferrer">@poorstreet.peru</a>} />
    </div>
  );
};

export default ProfileImage;