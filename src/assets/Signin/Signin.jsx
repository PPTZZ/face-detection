import { Component } from 'react'
import './signin.css'
import Logo from "../Logo/Logo"

class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
        }
    }
    onEmlailChange = (event) =>{
        this.setState({signInEmail: event.target.value});
    }
    onPasswordChange = (event) =>{
        this.setState({signInPassword: event.target.value});
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method:'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
               email:this.state.signInEmail,
               password:this.state.signInPassword 
            })
        })
        .then(resposne => resposne.json())
        .then(data => {
            if (data === 'success'){
                this.props.onRouteChange('home');
            }
        })
        .catch(err => console.log(err));
    }
    
    render(){
        return(
            <div className='login'>
                <div className='signin-card'>
                    <Logo/>
                    <h1 className='title black tc'>SIGN IN</h1> 
                    <form>
                        <div className='email-box component'>
                            <label form="email-input">e-mail: </label>
                            <input
                                type="email"
                                id="email-input"
                                onChange={this.onEmlailChange}
                                /><br/>
                        </div>
                        <div className='password-box component'>
                            <label>password: </label>
                            <input
                                type="password"
                                id="password-input"
                                onChange={this.onPasswordChange}
                                /><br/>
                            <button className='signin-button'
                                onClick={this.onSubmitSignIn}>
                                SIGN IN
                            </button>
                            <p className='f3 link dim black underline pa3 pointer tc'
                                onClick={()=> onRouteChange('register')}>
                                REGISTER
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Signin