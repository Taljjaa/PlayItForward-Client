import React from 'react';

const LoginDialogueBox = () => {
    return (
        <div className="flex flex-col h-full bg-red-800 px-4 pt-8">
            
            <input className="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg" placeholder="Enter Username"/>
        </div>
    );
};

export default LoginDialogueBox;