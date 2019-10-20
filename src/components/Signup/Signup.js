import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './Signup.css';

const Signup = () => {

    const [inputValues, setInputValues] = useState({
        login: '',
        password: '',
        name: '',
        email: '' });

    const onLoginChange = (event) => {
        const login = event.target.value;
        setInputValues({ ...inputValues, login: login })
    }

    const onPasswordChange = (event) => {
        const password = event.target.value;
        setInputValues({ ...inputValues, password: password })
    }

    const onNameChange = (event) => {
        const name = event.target.value;
        setInputValues({ ...inputValues, name: name })
    }

    const onEmailChange = (event) => {
        const email = event.target.value;
        setInputValues({ ...inputValues, email: email })
    }

    const onPhoneChange = (event) => {
        const phone = event.target.value;
        setInputValues({ ...inputValues, phone: phone })
    }

    const [selectedType, setSelectedType] = useState(-1);

    return (
        <div className="signup">
            <div className="container">
                <div className="sign-selection border-radius text-centered pointer" onClick={() => setSelectedType(0)}>
                    Я родитель или ребенок
                </div>
                { 
                    selectedType == 0 ? <div>
                        <div className="sign-selection border-radius text-centered pointer" onClick={() => setSelectedType(1)}>
                            Я родитель, регистрирую ребенка на курс и себя как наблюдателя
                        </div>
                        <div className="sign-selection border-radius text-centered pointer" onClick={() => setSelectedType(2)}>
                            Я родитель, хочу наблюдать за существующем на курсе ребенком
                        </div>
                        <div className="sign-selection border-radius text-centered pointer" onClick={() => setSelectedType(3)}>
                            Я ребенок
                        </div>
                    </div> : <div className="hide" />
                }
                <div className="sign-selection border-radius text-centered pointer" onClick={() => setSelectedType(4)}>
                    Я взрослый или студент
                </div>
                <div className="sign-selection border-radius text-centered pointer" onClick={() => setSelectedType(5)}>
                    Я хочу преподавать
                </div>
                {
                    selectedType > 0 ? <div className="container shadow form-cnt border-radius">
                        <h2>Регистрация</h2>
                        Все данные являются обязательными для заполнения

                        <div className="flex-column input-cnt relative">
                            <label htmlFor="login">Логин</label>
                            <input type="text" id="login" className="inputs inputs-width" placeholder="Введите ваш логин или почту" onChange={onLoginChange} value={inputValues.login} required/>
                        </div>

                        <div className="flex-column input-cnt relative">
                            <label htmlFor="password">Пароль</label>
                            <input type="password" id="password" className="inputs inputs-width" placeholder="Введите ваш пароль" onChange={onPasswordChange} value={inputValues.password} required/>
                        </div>

                        <div className="flex-column input-cnt relative">
                            <label htmlFor="name">ФИО</label>
                            <input type="text" id="name" className="inputs inputs-width" placeholder="Введите ваши ФИО" onChange={onNameChange} value={inputValues.email} required/>
                        </div>

                        <div className="flex-column input-cnt relative">
                            <label htmlFor="email">Электронная почта</label>
                            <input type="text" id="email" className="inputs inputs-width" placeholder="Введите ваш email" onChange={onPasswordChange} value={inputValues.password} required/>
                        </div>

                        <div className="flex-column input-cnt relative">
                            <label htmlFor="tel">Номер телефона</label>
                            <input type="tel" id="tel" className="inputs inputs-width" placeholder="Введите ваш номер телефона" onChange={onPasswordChange} value={inputValues.password} required/>
                        </div>

                        <div className="flex-column input-cnt relative">
                            <label>Пол</label>
                            <div>
                                <input id="male" name="button" type="radio" className="open" />
                                <label>Мужчина</label>
                            </div>
                            <div>
                                <input id="female" name="button" type="radio" className="open" />
                                <label>Женщина</label>
                            </div>
                        </div>

                        

                        <div className="flex-column input-cnt relative">
                            <label htmlFor="date">Дата рождения (ДД.ММ.ГГГГ)</label>
                            <input type="text" id="date" className="inputs inputs-width" placeholder="31.12.2019" onChange={onPasswordChange} value={inputValues.password} pattern="^\d{2}.\d{2}.\d{4}$" required/>
                        </div>

                        <div className="flex-column input-cnt relative">
                            <label>Цель изучения английского</label>
                            <select name="month">
                                <option value="month">Месяц</option>
                                <option value="jan">Январь</option>
                                <option value="feb">Февраль</option>
                                <option value="mar">Март</option>
                            </select>
                            {/* <input type="date" id="start" name="trip-start" value="2018-07-22" min="1918-01-01" max="2018-12-31" /> */}
                        </div>

                        <div>
                            Изменить фотографию
                            На фотографии должны быть вы
                            Файлы с расширением jpg, jpeg, png
                        </div>

                        <Link to={ `/user?id=${inputValues.login}` }>
                            <button className="border-radius white pointer grad-bg inputs-width">Завершить</button>
                        </Link>
                        <p className="form-inputs-width line-height text-centered" style={{marginBottom: '1em'}}>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <Link to="/privacy">политикой конфиденциальности</Link></p>

                    </div> : <div className="hide" />
                }
            </div>
        </div>
    );
}

export default Signup;