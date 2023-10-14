import {Component} from 'react'
import TParticles from './assets/TSParticles/TSParticles'
import Navigation from './assets/Navigation/Navigation'
import Logo from './assets/Logo/Logo'
import ImageLinkForm from './assets/ImageLinkForm/ImageLinkForm'
import Rank from './assets/Rank/Rank'
import './App.css'


class App extends Component{
  render(){
    return(
      <>
        <div className='App'>
          <TParticles/>
          <Navigation/>
          <Logo/>
          <Rank/>
          <ImageLinkForm/>
          {/* {<FaceRecognition/>} */}
        </div>
      </>
    )
  }
}

export default App
