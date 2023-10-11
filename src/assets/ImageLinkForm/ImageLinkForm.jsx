import './imageLinkForm.css'

const ImageLinkForm = ()=>{
    return(
        <>
            <p className="f3 tc">
                {'Insert image URL to detect faces'}
            </p>
            <div className="link-container">
                <input type="text"/>
                <button>DETECT</button>
            </div>
        </>
    )
}

export default ImageLinkForm