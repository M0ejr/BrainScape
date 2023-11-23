import React from 'react'
import './ImageinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f4 white'>
         {'This magic brain will detect faces in your pictures, give it a try'}
      </p>
      <div className='center'>
         <div className='form center pa4 br3 shadow-5'>
            <input 
              type="text" 
              className='b bw1 pa2 input-reset ba bg-transparent w-100 white' 
              placeholder='Enter the URL of the image' 
              onChange={onInputChange} 
            />
            <button 
              className='b bw1 pa2 input-reset ba bg-transparent w-30 white' 
              onClick={onButtonSubmit}>
                Detect
            </button>
         </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;