import {Component} from 'react'
import TParticles from './assets/TSParticles/TSParticles'
import Navigation from './assets/Navigation/Navigation'
import Logo from './assets/Logo/Logo'
import ImageLinkForm from './assets/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './assets/FaceRecognition/FaceRecognition'
import Rank from './assets/Rank/Rank'
import './App.css'

const returnClarifaiRequest = (imageURL) =>{
  const PAT = '144557196bec4077ae1597172dc82b42';
  const USER_ID = 'pptzz';       
  const APP_ID = 'face-detector';
  const IMAGE_URL = imageURL;

  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
});
const requestOptions = {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
  },
  body: raw
};
return requestOptions;

}

class App extends Component{
  constructor(){
    super();
    this.state = {
      input:'',
      imageURL:'',
      box:{},
    }
  }

  calculateFaceLoc = (coordonates) =>{
    const face = coordonates.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      topRow : (face.top_row * height),
      leftCol: face.left_col * width,
      bottRow: height - (face.bottom_row * height),
      rightCol: width - (face.right_col * width),
    }
  }
  
  displayBox = (box) => {
    this.setState({box:box});
  } 
  
  onInputChange = (event)=>{
    this.setState({input:event.target.value})
  }

  onButtonSubmit = () => {
  this.setState({imageURL:this.state.input})

    fetch("https://api.clarifai.com/v2/models/face-detection/outputs", returnClarifaiRequest(this.state.input))
        .then(response => response.json())
        .then(response => this.displayBox(this.calculateFaceLoc(response)))
        .catch(error => console.log('error', error));
    }

  render(){
    return(
      <>
        <div className='App'>
          <TParticles/>
          <Navigation/>
          <Logo/>
          <Rank/>
          <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition 
            imageURL={this.state.imageURL}
            box={this.state.box}
          />
        </div>
      </>
    )
  }
}

export default App
