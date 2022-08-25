import { useState } from 'react'
import './Login.scss'
import { authApi, conctactApi } from '../../api/api'
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
                authApi.login({email, password}).then(response => {
                    if(response.data.length === 0) {
                        alert('invalid email or password')
                    } else {
                        props.login({
                            id: response.data[0].id,
                            email: response.data[0].email,
                            name: response.data[0].name
                        })
                    }
                })
                

            }}>Log in</button>
            </div>
        </form>
    </>
}

export default Login