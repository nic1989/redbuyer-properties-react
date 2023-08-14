import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { setLogin } from '../utils/authSlices';

const Login = ({isLoggedIn}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = {
        username: 'testLogin',
        password: 't3stP@ssw0rd'
    };
    const [credentails, setCredentails] = useState(data);
    const [error, setError] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentails.username === data.username && credentails.password === data.password) {
            sessionStorage.setItem('isLoggedIn', 1);
            dispatch(setLogin(1));
            navigate('/');
        } else {
            setError(!error)
            return false;
        }
    }

    useEffect(() => {
        if (isLoggedIn === 1) {
            navigate('/');
        }
    }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-center">Login</h3>
                        {error && 
                            <div className="error-block">Please enter valid credentails.</div>
                        }
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    value={credentails.username}
                                    className="form-control"
                                    id="username"
                                    onChange={event => setCredentails({...credentails, username: event.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    value={credentails.password}
                                    className="form-control"
                                    id="password"
                                    onChange={event => setCredentails({...credentails, password: event.target.value})} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;