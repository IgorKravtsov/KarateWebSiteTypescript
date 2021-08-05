import React, { FC } from 'react'
import cn from 'classnames';

import styles from './LinkButton.module.scss';
import { Link } from 'react-router-dom';
import {ILinkButton} from "./ILinkButton";



const LinkButton:FC<ILinkButton> = (
    {view='filled',
    to,
    classes,
    children}
    ) => {


    return (

            <Link
                className={cn(styles.link)} to={to}>
                <div
                    className={cn(styles.btn, {
                        [styles.btn__filled]: view === "filled"
                    }, classes)}>{children}</div>
            </Link>

    )
};

export default LinkButton;
