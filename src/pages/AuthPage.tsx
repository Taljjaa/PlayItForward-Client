import React from 'react';

import Navbar from '../components/Navbar'
import AuthWindow from '../components/AuthWindow'

// Layout
// Navbar, AuthWindow
const AuthPage = () => {
    return (
        <div className="auth-page w-screen h-screen">
            {/* Navbar */}
            <Navbar />

            <div className="auth-page-body flex h-full justify-center items-center">
                {/* AuthWindow */}
                <AuthWindow />
            </div>
        </div>
    );
};

export default AuthPage;