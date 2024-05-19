import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import { useUser } from '../auth/useUser';
export const Login = () => {
    // We'll use the history to navigate the user
    // programmatically later on (we're not using it yet)
    const history = useHistory();

    // These states are bound to the values of the text inputs
    // on the page (see JSX below). 
    const [, setToken] = useToken();
    const [, setUser] = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // These state variables control whether or not we show
    // the success and error message sections after making
    // a network request (see JSX below).
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    // This useEffect hook automatically hides the
    // success and error messages after 3 seconds when they're shown.
    // Just a little user interface improvement.
    useEffect(() => {
        if (showSuccessMessage || showErrorMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                setShowErrorMessage(false);
            }, 3000);
        }
    }, [showSuccessMessage, showErrorMessage]);


    const login = async() => {
        const response = await axios.post(process.env.REACT_APP_API_URL + '/login', {
            email: username,
            password: password
        });
        const token = response.data.token;
        console.log(response);
        setToken(token);
        setUser(response.data.id);
        history.push('/');
    }


    // And here we have the JSX for our component. It's pretty straightforward
    return (
        <div className="content-container">
            <h1>Login</h1>
            {showSuccessMessage && <div className="success">Success!</div>}
            {showErrorMessage && <div className="fail">Error!</div>}

            <label>
                username
                <input
                    onChange={e => setUsername(e.target.value)}
                    value={username} />
            </label>
            <label>
                password
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password} />
            </label>
            <hr />

            <button
                disabled={!username || !password}
                onClick={login}>
                Login</button>
        </div>
    );
}