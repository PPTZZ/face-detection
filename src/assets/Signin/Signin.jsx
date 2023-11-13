import './signin.css'
import Logo from "../Logo/Logo"

const Signin = ({onSignIn, onRegister})=>{
    return(
        <div className='login'>
            <div className='signin-card'>
                <Logo/>
                <h1 className='title black tc'>SIGN IN</h1> 
                <form>
                    <div className='email-box component'>
                        <label form="email-input">e-mail: </label>
                        <input type="email" id="email-input"></input><br/>
                    </div>
                    <div className='password-box component'>
                        <label>password: </label>
                        <input type="password" id="password-input"></input><br/>
                        <button className='signin-button'
                            onClick={onSignIn}>
                            SIGN IN
                        </button>
                        <p className='f3 link dim black underline pa3 pointer tc'
                            onClick={onRegister}>
                            REGISTER
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin