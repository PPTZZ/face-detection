import './faceRecognition.css'

const FaceRecognition = ({imageURL, box}) =>{
    return(
        <div className='position'>
         <div className='image-container'>
             <img id='input-image' src={imageURL} alt=''/>
             <div className='face-box absolute' style={{top:box.topRow, right:box.rightCol, bottom:box.bottRow, left:box.leftCol,}}></div>
         </div>
        </div>
    )
}

export default FaceRecognition;