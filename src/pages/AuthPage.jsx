import React from 'react'
import './authPage.css'
import Header from '../components/Header/Header';
import Auth from '../components/authComponent/Auth';

const AuthPage = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Auth />
      </div>
    </div>
  )
}

export default AuthPage;