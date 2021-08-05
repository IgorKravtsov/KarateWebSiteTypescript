import React from 'react'
import styles from './header.module.scss';
import {Link} from 'react-router-dom';
import LinkButton from "../../UIComponents/LinkButton/LinkButton";
import Container from "../../UIComponents/Container/Container";
import cn from "classnames";


const Header = () => {

    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scroll]);

    return (
        <header className={cn(styles.header, {
            [styles.header__scrolled]: scroll > 10,
        })}>
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
