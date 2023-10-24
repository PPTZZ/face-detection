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
    }
  }

  onInputChange = (event)=>{
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
  this.setState({imageURL:this.state.input})

    fetch("https://api.clarifai.com/v2/models/color-recognition/outputs", returnClarifaiRequest(this.state.input))
        .then(response => response.json())
        .then(result => console.log(result))
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
          <FaceRecognition imageURL = {this.state.imageURL}/>
        </div>
      </>
    )
  }
}

export default App
