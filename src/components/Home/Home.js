import React from 'react';
import Img from 'react-image';

import Spinner from '../Spinner/Spinner';
import bg from '../../assets/images/bg3.svg';
import icon1 from '../../assets/images/icon-1.svg';
import icon2 from '../../assets/images/icon-2.svg';
import icon3 from '../../assets/images/icon-3.svg';
import icon4 from '../../assets/images/icon-4.svg';

import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="flex">
            <div>
            <nav className="subnav">
                <ul className="flex">
                    <li className="bold black pointer">Детям и родителям</li>
                    <li className="bold black pointer">Взрослым и студентам</li>
                    <li className="bold black pointer">Учителям и преподавателям</li>
                </ul>
            </nav>
            {/* <h1>Go Higher</h1>
            <p className="huge-font line-height home-text">Хотите достичь еще больше высот в освоении языка? Тогда вы попали по адресу!</p> */}
            <div style={{width: 700}}>
            <h1>HighExperience</h1>
            <h2 className="line-height">Онлайн-школа английского языка, с которой достигаются новые высоты. Go Higher!</h2>
            </div>
            <ul className = "home-points line-height">
                <li className="container text-centered border-radius dark-pink-bg white pointer">
                    <img src={icon1} />
                    Гибкость учебного графика
                    {/* Вы сами определяете удобное для Вас время проведения занятий. Это может быть утро, день или вечер, рабочее время или выходной день */}
                </li>
                <li className="container text-centered border-radius dark-blue-bg white pointer">
                    <img src={icon2} />
                    Экономия времени
                    {/* Ритм жизни практически не оставляет времени на курсы и поездки на другой конец города к репетиторам? Нет необходимости тратить время на дорогу к преподавателю */}
                </li>
                <li className="container text-centered border-radius dark-pink-bg white pointer">
                    <img src={icon3} />
                    Приемлемые цены
                    {/* Ещё никогда изучение английского языка онлайн в Москве, Санкт-Петербурге и по всей России не было таким доступным: мы предлагаем отличные цены, которые приятно удивят и порадуют */}
                </li>
                <li className="container text-centered border-radius dark-blue-bg white pointer">
                    <img src={icon4} />
                    Профессиональные преподаватели
                    {/* Ещё никогда изучение английского языка онлайн в Москве, Санкт-Петербурге и по всей России не было таким доступным: мы предлагаем отличные цены, которые приятно удивят и порадуют */}
                </li>
                {/* <li className="container text-centered border-radius">
                <img src={bg} style={{width: 50}}/>
                    Лучшие мастера бла бла бла бла бла бла бла бла бла
                </li> */}
            </ul>

            {/* <ul className = "home-points t2 line-height dark-blue-bg-shadow">
                <li className="container text-centered border-radius white">
                    <img src={icon1} />
                    Гибкость учебного графика
                </li>
                <li className="container text-centered border-radius white">
                    <img src={icon2} />
                    Экономия времени
                </li>
                <li className="container text-centered border-radius white">
                    <img src={icon3} />
                    Приемлемые цены
                </li>
                <li className="container text-centered border-radius white">
                    <img src={icon4} />
                    Профессиональные преподаватели
                </li>
            </ul> */}
            </div>
            <Img src={bg} className="bg" loader={<Spinner where='home' />} />
            </div>
            <div className="line-height larger-font" style={{marginTop: 50}}>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
            </div>
        </div>
    );
}

export default Home;