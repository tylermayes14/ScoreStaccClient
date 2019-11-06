import React, {useState} from 'react';
import './Auth.css';
import APIURL from '../../helpers/environment';

const url = "http://localhost:3000/scorestacc/user";

const Auth = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    // const [signup, setSignup] = useState(true);

    const title = () => {
        return login ? 'Login' : 'Sign Up';
    }

    const logginToggle = (event) => {
        event.preventDefault();

        setLogin(!login);
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const url = login ? `${APIURL}/scorestacc/user/login` : `${APIURL}/scorestacc/user/signup`;
        const bodyObj = !login ? {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        } : {
            email: email,
            password: password,
        }
        console.log(bodyObj, url)

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(bodyObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => props.setSession(json.sessionToken))
        .catch(err => console.log(err))
    }

    const signupFields = () => !login ?
    (
        <div>
            <label htmlFor='firstName'>First Name:</label>
            <br/>
            <input type='text' id='firstName' value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            <br/>
            <label htmlFor='lastName'>Last Name:</label>
            <br/>
            <input type='text' id='lastName' value={lastName} onChange={ (e) => setLastName(e.target.value) } />
        </div>
    ) : null;

    return (
        <div className="authBody">
            <form onSubmit={handleSubmit}>
                <h1 className="text">Welcome</h1>
                <h2 className="text">Please Login or Sign Up to Begin</h2>
                <br/>
                <h1 className="text">{title()}</h1>
                {signupFields()}
                <label htmlFor='email'>Email:</label>
                <br/>
                <input type='text' id='email' value={email} onChange={ (e) => setEmail(e.target.value) } />
                <br/>
                <label htmlFor='password'>Password:</label>
                <br/>
                <input type='password' id='password' value={password} onChange={ (e) => setPassword(e.target.value) } />
                <br/>
                <button type='submit' className="buttonMargin">Login/Sign Up</button>
                <br/>
                <button onClick={logginToggle} className="loginButton">Toggle</button>
            </form>

            <footer>
                <p>© Tyler Mayes | 2019</p>
            </footer>
        </div>
    )
}

export default Auth;