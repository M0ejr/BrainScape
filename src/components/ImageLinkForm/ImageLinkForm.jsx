import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="tc">
      <p className="f4 white">
        "This magic brain will detect faces in your pictures, give it a try"
      </p>
      <div className="pa3 br3 center">
        <div className="flex flex-column items-center w-80-l w-50-m w-75">
          <input
            type="text"
            className="b bw1 pa2 input-reset ba w-80 white bg-near-black mb3-l mb2-m mb2"
            placeholder="Enter the URL of the image"
            onChange={onInputChange}
          />
          <button
            className="b bw1 ph4 pv2 input-reset ba b--dark grow pointer f6 dib white bg-near-black pa3"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
