import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Header = ({onShowNewPhoto}) => {
    return(
        <header>
            <Link to = '/entry'>
            <h1>Flashback</h1>
            </Link>
            <Button 
                type = 'width-init'
                onClick = { onShowNewPhoto }>NEW PHOTO</Button>
        </header>
    )
}
export default Header;