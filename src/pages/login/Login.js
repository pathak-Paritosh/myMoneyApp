import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

// styles
import './Login.css';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { error, isPending, login } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    }

    const handleSetPassword = (e) => {
        setShowPassword(prev => !prev);
    }

    return (
        <div className='login'>
            <h2>login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-field-div">
                    <label htmlFor="login-email">email:</label>
                    <input 
                        type="email" 
                        id='login-email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>
                <div className="input-field-div">
                    <label htmlFor="login-password">password:</label>
                    <input 
                        type={showPassword ? 'text' : 'password'}
                        id='login-password' 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>
                <div className="input-field-div checkbox">
                    <label htmlFor="check">Show Password</label>
                    <input type="checkbox" id='check' onClick={handleSetPassword} />
                </div>
                { !isPending && <button className='btn'>Login</button>}
                { isPending &&  <button className='btn' disabled>loading...</button>}
                { error && <p>{error}</p> }
            </form>
        </div>
    )
}
