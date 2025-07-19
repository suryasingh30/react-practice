import React, { useState } from 'react';

export default function LoginForm() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
    }

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div style={{
            border: '3px solid green',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input type='text' name='username' value={formData.username} onChange={handleChange}></input>
                </label>
                <br></br>
                <label>Email
                    <input type='email' name='email' value={formData.email} onChange={handleChange}></input>
                </label>
                <br></br>
                <label>Password
                    <input type='password' name='password' value={formData.password} onChange={handleChange}></input>
                </label>
                <br></br>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


