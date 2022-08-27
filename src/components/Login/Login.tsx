import { useState } from 'react'
import './Login.scss'
import { Navigate } from 'react-router-dom'

const Login = (props: any) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    if (props.auth) return <Navigate to='/' />

    return <>
        <form className="login-form">
            <div className="login-form__item">
                <label htmlFor="email" >Email</label>
                <input 
                value={email} 
                onChange={(ev) => {setEmail(ev.target.value)}} 
                placeholder="Enter email" 
                id="email"/>
            </div>
            <div className="login-form__item">
                <label htmlFor="password">Password</label>
                <input 
                    value={password} 
                    onChange={(ev) => {setPassword(ev.target.value)}} 
                    placeholder="Enter password" 
                    id="password"
                />
            </div>
            <div className='login-form__item'>
            <button onClick={(ev) => {
                ev.preventDefault()
                props.login(email, password)
            }}>Log in</button>
            </div>
        </form>
    </>
}

export default Login