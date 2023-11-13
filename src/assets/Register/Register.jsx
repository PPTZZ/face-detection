import './register.css'
import Logo from "../Logo/Logo"

const Register = ({onSignIn})=>{
    return(
        <div className='login'>
            <div className='signin-card'>
                <Logo/>
                <h1 className='title black tc'>REGISTER</h1> 
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
                            REGISTER
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register