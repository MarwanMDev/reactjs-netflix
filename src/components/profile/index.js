import React from 'react';
import Navbar from '../navbar';
import './profile.css';
import DEFAULTUSER from '../../assets/default-user.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <Navbar />
      <div className="profile__contents">
        <h1>Edit Profile</h1>

        <div className="profile__info">
          <img src={DEFAULTUSER} alt="profilePic" />

          <div className="profile__details">
            <h2>{user.email}</h2>

            <div className="profile__plans">
              <h3>Plans</h3>
              <button
                className="profile__signout"
                onClick={() => signOut(auth)}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
