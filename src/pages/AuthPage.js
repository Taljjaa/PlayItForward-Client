// React imports
import React from 'react';

// Custom imports
import Navbar from '../components/Navbar'
import AuthWindow from '../components/AuthWindow'
// This is a functional component that lays out the login/singup dialogue boxes
// Layout
// Navbar, AuthWindow
const AuthPage = () => {
    return (
        <div className="auth-page w-screen h-screen">
            <Navbar />
            <div className="auth-page-body flex h-full justify-center items-center">
                <AuthWindow />
            </div>
        </div>
    );
};

export default AuthPage;