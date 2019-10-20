import React from "react";

import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="personal-info">
                <div className="flex-centered-vert">
                    <p>Image</p>
                    <div className="flex-column">
                        <p>Иван Пупкин</p>
                        <p>Иконка США, Нью Йорк</p>
                        <p>Иконка Мужчина, 49 лет</p>
                        <p>Иконка Заходил вчера(5 минут/2 часа назад)</p>
                    </div>
                </div>
                <div className="flex">
                    <div>Количество проведенных занятий: 1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;