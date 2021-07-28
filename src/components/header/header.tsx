import React, {useEffect} from 'react'
import styles from './header.module.scss';
import {Link} from 'react-router-dom';
import LinkButton from "../../UIComponents/LinkButton/LinkButton";
import Container from "../../UIComponents/Container/Container";
import {useTypedSelector} from "../../hooks/UseTypedSelector";
import {useDispatch} from "react-redux";
import {getWindowOffset} from "../../store/actionCreators/window";


const Header = () => {
    const {windowOffset} = useTypedSelector(state => state.window);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWindowOffset())
    }, [windowOffset])

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__wrapper}>
                    <Link to={'/'}>
                        <img className={styles.header__logo} src={process.env.PUBLIC_URL + '/img/logo.png'} alt="kyokushinkay"/>
                    </Link>
                    <nav className={styles.header__nav}>
                        <ul>
                            <li><Link to={'/'}>Новости</Link></li>
                            <li><Link to={'/'}>Про нас</Link></li>
                            <li><Link to={'/'}>Контакты</Link></li>
                        </ul>
                        <LinkButton to={"/"} view={"outline"}>Связаться с нами</LinkButton>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default Header
