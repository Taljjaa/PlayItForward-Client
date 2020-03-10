import React from 'react';

const letterIndex = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const NonprofitGrid = () => {

    console.log(letterIndex);

    return (
        <div className="nonprofit-grid-cp flex flex-col flex-grow w-screen">
            <div className="nonprofit-grid-cp-letter-index flex flex-col justify-center h-full w-10 bg-red-600">
                {letterIndex.map(letter => {
                    return <button className="text-sm">{letter}</button>
                })}
            </div>
            <div>

            </div>
        </div>
    );
};

export default NonprofitGrid;