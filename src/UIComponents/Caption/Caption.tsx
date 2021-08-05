import React, {FC} from 'react'
import styles from './Caption.module.scss';
import cn from "classnames";

export interface ICaption {
    view: "left" | "center";
    dividerView: "long" | "short";
    classes?: string;
    dividerClasses?: string;
    topOffset?: number;
    h1?: boolean;
}

const Caption:FC<ICaption> = (
    {
        view,
        classes,
        dividerClasses,
        dividerView,
        topOffset,
        children,
        h1= false
    }) => {
  return (
      <div className={cn(styles.caption, {
          [styles.caption__center]: view === "center",
          [styles.caption__left]: view === "left",
      })}>
          {h1 ?
              <h1
                className={cn(styles.caption, styles.inline,  classes)}
            >
                {children}
            </h1> :
              <h2
                  className={cn(styles.caption, styles.inline,  classes)}
              >
                  {children}
              </h2>
          }
            <div
                className={cn(styles.caption__divider, {
                [styles.caption__divider__long]: dividerView === "long",
                [styles.caption__divider__short]: dividerView === "short",
            }, dividerClasses)}
                style={{marginTop: topOffset}}
            >
            </div>
      </div>
  )
}

export default Caption
