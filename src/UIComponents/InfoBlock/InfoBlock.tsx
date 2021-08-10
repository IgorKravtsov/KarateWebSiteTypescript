import React, {FC} from 'react'
import cn from "classnames";
import styles from './InfoBlock.module.scss';


export interface IInfoBlock {
    view?: 'transparent' | 'red';
    backElem: React.ReactNode;
}

const InfoBlock:FC<IInfoBlock> = (
    {
        view='transparent',
        backElem,
        children,
    }
) => {
  return (
    <div className={cn(styles.infoBlock)}>
        <div className={cn(styles.infoBlock__back, {
            [styles.red]: view === 'red',
        })}>
            {backElem}
        </div>
        {children}
    </div>
  )
}

export default InfoBlock
