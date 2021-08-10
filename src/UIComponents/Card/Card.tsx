import React, {FC} from 'react';
import cn from "classnames";
import styles from './Card.module.scss';
import {ICard} from "./ICard";
import {Link} from "react-router-dom";


const Card:FC<ICard> = ({
    width=400,
    height=540,
    children,
    classes,
    img,
    title,
    subtitle,
    socialNetworks,
    linkTo,
}) => {
     const renderSocialNetworks = socialNetworks && socialNetworks.map((item) => {
       return (<Link key={item.to} to={item.to}>{item.svgElement}</Link>)
    })
    return (
        <div style={{width, height}} className={cn(styles.card, classes)}>
            <Link to={linkTo ? linkTo : '/'}><img src={img} alt={"trainer"} className={cn(styles.card__img)}/></Link>
            {/*<img src={img} alt={"photo"} className={cn(styles.card__img)}/>*/}
            <Link to={linkTo ? linkTo : '/'}><h2 className={cn(styles.card__title)}>{title}</h2></Link>
            <h3 className={cn(styles.card__subtitle)}>{subtitle}</h3>
            <div className={cn(styles.card__social)}>
                {renderSocialNetworks}
            </div>
        </div>
    );
}

export default Card;