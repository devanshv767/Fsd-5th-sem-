import React, { useState } from 'react';
import image from "../images/images.png";

function ImageManipulation() {

  // Default image dimensions
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);

  // Functions
  function increaseHeight() {
    setHeight(height + 20);
  }

  function decreaseHeight() {
    setHeight(height - 20);
  }

  function increaseWidth() {
    setWidth(width + 20);
  }

  function decreaseWidth() {
    setWidth(width - 20);
  }

  return (
    <div>
      <h2>Image Manipulation</h2>

      <div
        style={{
          border: '4px solid red',
          height: '300px',
          width: '300px',
          margin: 'auto',
        }}
      >
        <img
          src={image}
          height={height}
          width={width}
        />
      </div>

      <div>

        <button onClick={increaseHeight}>
          Increase Height
        </button>

        <button onClick={decreaseHeight}>
          Decrease Height
        </button>

        <button onClick={increaseWidth}>
          Increase Width
        </button>

        <button onClick={decreaseWidth}>
          Decrease Width
        </button>

      </div>

    </div>
  );
}

export default ImageManipulation;