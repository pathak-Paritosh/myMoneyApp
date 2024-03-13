import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// styles
import './Signup.css';

export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { signup, error, isPending } = useSignup();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email, password, displayName);
    }

    const handleSetPassword = (e) => {
        setShowPassword(prev => !prev);
    }

    return (
        <div className='signup'>
            <h2>signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-field-div">
                    <label htmlFor="signup-email">email:</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id='signup-email'
                        required
                    />
                </div>
                <div className="input-field-div">
                    <label htmlFor="signup-password">password:</label>
                    <input 
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id='signup-password'
                        required
                    />
                </div>
                <div className="input-field-div checkbox">
                    <label htmlFor="check">Show Password</label>
                    <input type="checkbox" id='check' onClick={handleSetPassword} />
                </div>
                <div className="input-field-div">
                    <label htmlFor="display-name">display name:</label>
                    <input 
                        type="text" 
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        id='display-name'
                        required
                    />
                </div>
                {!isPending && <button className='btn'>Signup</button>}
                {isPending && <button className='btn' disabled>loading...</button>}
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}
