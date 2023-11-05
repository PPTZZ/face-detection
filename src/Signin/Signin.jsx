import './signin.css'
import Logo from "../assets/Logo/Logo"

const Signin = ({onSignIn})=>{
    return(
        <div className='login'>
            <div className='signin-card'>
            <Logo/>
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
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin