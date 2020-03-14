import React from "react";

const GifButton = props => {
  return (
    <div class="flex flex-col items-center w-40 h-40 rounded shadow-lg bg-blue-400 mx-2 hover:bg-blue-500">
      <img
        class="w-32 h-32 -mb-4"
        src={props.image}
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-sm mb-2">{props.caption}</div>
      </div>
    </div>
  );
};

export default GifButton;
