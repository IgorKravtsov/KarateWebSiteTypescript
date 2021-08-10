import React, {FC} from 'react';
import styles from './Container.module.scss';
import cn from "classnames";
import {IContainer} from "./IContainer";

const Container:FC<IContainer> = (
    {
        children,
        ...props
    }) => {
    return (
        <div className={cn(styles.container)} {...props}>
            {children}
        </div>
    )
};

export default Container;