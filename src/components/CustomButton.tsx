// React IMPORTS
import React, { useState } from "react";

// CSS IMPORTS
import { FunctionComponent } from "react";

type ButtonProps = {
  buttonImages: {
    hover: string;
    unpressed: string;
    pressed: string;
  };
  style: string;
  eventHandler: Function;
};

const CustomButton: FunctionComponent<ButtonProps> = ({
  buttonImages,
  style,
  eventHandler
}) => {
  const { hover, unpressed, pressed } = buttonImages;

  const [currentImage, setCurrentImage] = useState(unpressed);

  return (
    <button className={style}>
      <img
        className="w-full h-full"
        onClick={() => eventHandler()}
        onMouseEnter={() => setCurrentImage(hover)}
        onMouseLeave={() => setCurrentImage(unpressed)}
        onMouseDown={() => setCurrentImage(pressed)}
        onMouseUp={() => setCurrentImage(unpressed)}
        src={currentImage}
        alt="alt"
      />
    </button>
  );
};

export default CustomButton;
