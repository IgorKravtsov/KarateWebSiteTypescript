import React, {FC} from 'react'
import cn from 'classnames';

import styles from './LinkButton.module.scss';
import { Link } from 'react-router-dom';

export interface ILinkButton {
    onClickHandle?: (e:React.ButtonHTMLAttributes<HTMLButtonElement>) => void;
    text: string;
    view?: 'filled' | 'outline';
    to: string;
}


const LinkButton:FC<ILinkButton> = ({text, view='filled', to}) => {

  return (
      <div className={cn(styles.btn, {
            [styles.filled]: view === "filled",
            [styles.outline]: view === "outline"
        })}>
            <Link to={to}>{text}</Link>
      </div>

        // <button className={}>
        //     {text}
        // </button>
  )
};

export default LinkButton;
