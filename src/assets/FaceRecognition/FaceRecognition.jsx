import './faceRecognition.css'

const FaceRecognition = ({imgURL}) =>{
    return(
        <div className='image-container'>
            <img src={imgURL} alt='Your Image Here'/>
        </div>
    )
}

export default FaceRecognition;