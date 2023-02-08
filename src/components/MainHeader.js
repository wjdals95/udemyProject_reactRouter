import React from 'react';
import { Link } from 'react-router-dom';
//Link: 말 그대로 링크를 생성하는 역할.

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/welcome'>Welcome</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;