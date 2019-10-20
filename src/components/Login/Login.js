import React, { useState } from "react";
import { Link } from 'react-router-dom';

import userIcon from '../../assets/images/user-icon3.svg';
import passwordIcon from '../../assets/images/password-icon.svg';
import './Login.css';

const Login = () => {

    const [inputValues, setInputValues] = useState({ login: '', password: '' });

    const onLoginChange = (event) => {
        const login = event.target.value;
        setInputValues({ ...inputValues, login: login })
    }

    const onPasswordChange = (event) => {
        const password = event.target.value;
        setInputValues({ ...inputValues, password: password })
    }

    return (
        <div className="login container">
            <div className="container shadow form-cnt border-radius">
                <h2>Войти</h2>
                
                <div className="flex-column input-cnt relative">
                    <label htmlFor="login">Логин</label>
                    <input type="text" id="login" className="inputs inputs-width" placeholder="Введите ваш логин или почту" onChange={onLoginChange} value={inputValues.login} required/>
                    <img src={userIcon} />
                </div>

                <div className="flex-column input-cnt relative">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" id="password" className="inputs inputs-width" placeholder="Введите ваш пароль" onChange={onPasswordChange} value={inputValues.password} required/>
                    <img src={passwordIcon} />
                </div>
                <div className="forgot inputs-width">
                <Link to={ `/user?id=${inputValues.login}` }>
                    Забыли пароль?
                </Link>
                </div>

                <Link to={ `/user?id=${inputValues.login}` }>
                    <button className="border-radius white pointer grad-bg inputs-width">Войти</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;