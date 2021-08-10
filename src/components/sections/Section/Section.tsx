import React, {FC} from 'react'

export interface ISection extends React.HTMLAttributes<HTMLElement> {
    background?: string;
    classes?: string;
}

const Section:FC<ISection> = (
    {
        background,
        children,
        style,
        classes

    }) => {
    const styles = background ? {...style, background: `url(${background}) no-repeat 50%/cover`} : {...style};
  return (
    <section className={classes} style={styles}>
        {children}
    </section>
  )
}

export default Section
