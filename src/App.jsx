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

  render(){
    return(
      <>
        <div className='App'>
          <TParticles/>
          <Navigation/>
          <Logo/>
          <Rank/>
          <ImageLinkForm onInputChange={this.onInputChange}/>
          {/* {<FaceRecognition/>} */}
        </div>
      </>
    )
  }
}

export default App
