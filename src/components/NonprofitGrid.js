// React imports
import React from 'react';

//Custom imports
import NonprofitCardCollection from './NonprofitCardCollection'

// index of letters for alphabetical indexing
const letterIndex = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// This is a function component that displays a scrolling nonprofit list
// Layout:
// Alphabetical Index, Nonprofit Collection
const NonprofitGrid = () => {

    return (
        <div className="nonprofit-grid-cp flex flex-grow w-screen">
            {/* Alphabetical Index */}
            <div className="nonprofit-grid-cp-letter-index flex flex-col justify-center items-center h-full w-10 bg-blue-400">
                {letterIndex.map(letter => {
                    return <button className="text-xs w-5 focus:outline-none focus:shadow-outline focus:bg-blue-300">{letter}</button>
                })}
            </div>

            {/* Nonprofit Collection */}
            <div className="nonprofit-grid-body flex flex-col items-center w-full">
                <div className="nonprofit-grid-body-header-container">
                    <h1 className="nonprofit-grid-body-header">NONPROFITS</h1>
                </div>
                <NonprofitCardCollection />
            </div>
        </div>
    );
};

export default NonprofitGrid;