import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//Link: 말 그대로 링크를 생성하는 역할.

import classes from './MainHeader.module.css'

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/products'>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;