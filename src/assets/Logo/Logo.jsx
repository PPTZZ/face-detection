import Tilt from 'react-parallax-tilt';
import brain from './brain.svg'
import './logo.css'


const Logo = ()=>{
    return(
        <>
            <div className=" ma4 mt0 logo-container">
            <Tilt>
                  <img src={brain} alt='digital-brain'/>
            </Tilt>
            </div>
        </>
    )
}

export default Logo;