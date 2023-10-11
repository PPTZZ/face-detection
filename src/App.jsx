import {Component} from 'react'
import Navigation from './assets/Navigation/Navigation'
import Logo from './assets/Logo/Logo'
import ImageLinkForm from './assets/ImageLinkForm/ImageLinkForm'
import './App.css'

class App extends Component{
  render(){
    return(
      <>
        <div className='App'>
          <Navigation/>
          <Logo/>
          <ImageLinkForm/>
          {/* {<FaceRecognition/>} */}
        </div>
      </>
    )
  }
}

export default App
