import React from 'react';

const DropdownOptions = () => {
    return (
       <div className="absolute border-t border-blue-400 flex flex-col w-full h-auto py-2 bg-gray-900">
           <a className="ml-8 text-blue-400 text-bold mb-1" href="/settings">Account Settings</a>
           <a className="ml-8 text-blue-400 text-bold mb-1" href="/about">My Dashboard</a>
           <a className="ml-8 text-blue-400 text-bold mb-1" href="/about">My Events</a>
           <a className="ml-8 text-blue-400 text-bold" href="/about">Logout</a>
       </div>
    );
};

export default DropdownOptions;