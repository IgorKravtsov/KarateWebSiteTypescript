import React, {FC} from 'react';
import styles from './Container.module.scss';
import cn from "classnames";
import {IContainer} from "./IContainer";

const Container:FC<IContainer> = ({children}) => {
    return (
        <div className={cn(styles.container)}>
            {children}
        </div>
    )
};

export default Container;