import React, { FC } from 'react'
import cn from 'classnames';

import styles from './LinkButton.module.scss';
import { Link } from 'react-router-dom';

export interface ILinkButton {
    onClickHandle?: (e:React.ButtonHTMLAttributes<HTMLButtonElement>) => void;
    view?: 'filled' | 'outline';
    to: string;
    children?: React.ReactNode;
}


const LinkButton:FC<ILinkButton> = ({view='filled', to, children}) => {

  return (
      <div className={cn(styles.btn, {
            [styles.filled]: view === "filled",
            [styles.outline]: view === "outline"
        })}>
            <Link className={cn(styles.btn__link)} to={to}>{children}</Link>
      </div>
  )
};

export default LinkButton;
