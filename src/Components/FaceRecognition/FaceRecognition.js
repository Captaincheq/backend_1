import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({ imageUrl, box}) => {
    return (
        <div className= 'center ma'>
            <div className= 'absolute mt2'>
                <img id='inputImage' alt='' src={ imageUrl } width='500px' heigh='auto'/>
            <div className='bounding-box' style = {{top: box.topRow, right: box.leftCol, bottom: box.bottomRow, left: box.rightCol}}></div>
            </div>
        </div>
    )
}
export default FaceRecognition;