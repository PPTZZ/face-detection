import {Component} from 'react'
import TParticles from './assets/TSParticles/TSParticles'
import Navigation from './assets/Navigation/Navigation'
import Logo from './assets/Logo/Logo'
import ImageLinkForm from './assets/ImageLinkForm/ImageLinkForm'
import Rank from './assets/Rank/Rank'
import './App.css'


class App extends Component{
  constructor(){
    super();
    this.state = {
      input:'',
    }
  }

  onInputChange = (event)=>{
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log(`click!`)
        
    const PAT = '144557196bec4077ae1597172dc82b42';
    const USER_ID = 'pptzz';       
    const APP_ID = 'my-first-application-smn1d';
    const MODEL_ID = 'face-detection'; 
    const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

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

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
        .then(response => response.text())
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
          {/* {<FaceRecognition/>} */}
        </div>
      </>
    )
  }
}

export default App
