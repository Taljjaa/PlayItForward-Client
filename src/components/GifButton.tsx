// React imports
import React from 'react';
import './GifButton.scss';

// Functional component that displays a clickable gif with a caption
// Layout:
// Image, Caption

type Props = {
  caption: string;
  image: string;
};

// My Gif Button
const GifButton = (props: Props) => {
  const { caption, image } = props;
  return (
    <div className="gifButtonContainer">
      {/* Image */}
      <img className="gifImage" src={image} alt={caption} />

      {/* Caption */}
      <div>
        <div className="caption">{caption}</div>
      </div>
    </div>
  );
};

export default GifButton;
