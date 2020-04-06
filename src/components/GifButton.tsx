// React imports
import React from 'react';

// Functional component that displays a clickable gif with a caption
// Layout:
// Image, Caption

type Props = {
  caption: string;
  image: string;
};

// My Gif Button
const GifButton = (props: Props) => {
  return (
    <div className="flex flex-col items-center w-40 h-40 xl:w-64 xl:h-64 rounded shadow-lg bg-blue-400 mx-2 hover:bg-blue-500">
      {/* Image */}
      <img
        className="w-full h-full -mb-4"
        src={props.image}
        alt="Sunset in the mountains"
      />

      {/* Caption */}
      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2">{props.caption}</div>
      </div>
    </div>
  );
};

export default GifButton;
