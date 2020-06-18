import React from 'react';
import FormDate from '../FormDate';

import './styles.scss';

const Aside = () => {
    return (
        <aside className='aside'>
            <div className='aside__wrapper'>
                <div>
                    <img src="" alt="ш"/>
                    <span>Имя</span>
                    <span>Фамилия</span>
                </div>
                <nav className='main-nav'>
                    <li className='main-nav__item'>
                        Собития
                    </li>
                    <li className='main-nav__item'>
                        Друзя
                    </li>
                    <li className='main-nav__item'>
                        Настройки профиля
                    </li>
                </nav>
            </div>
            
            {/* <FormDate /> */}
        </aside>
    )
}

export default Aside;