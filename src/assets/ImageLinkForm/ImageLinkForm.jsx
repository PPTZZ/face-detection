import './imageLinkForm.css';


const ImageLinkForm = ({onInputChange, onButtonSubmit})=>{
    return(
        <>
            <p className="f3 tc">
                {'Insert image URL to detect faces'}
            </p>
            <div className="link-container">
                <input type="text" className='image-input' onChange={onInputChange}/>
                <button onClick={onButtonSubmit}>DETECT</button>
            </div>
        </>
    )
}

export default ImageLinkForm;