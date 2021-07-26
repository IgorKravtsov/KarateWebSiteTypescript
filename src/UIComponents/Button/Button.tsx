import React, {FC, PropsWithChildren} from 'react';

export const STYLES = ['btn--primary','btn--outline'];
export const SIZES = ['btn--medium','btn--large','btn--mobile','btn--wide'];
export const COLORS = ['primary','blue','red', 'green'];

export interface ButtonProps {
    children: PropsWithChildren<any>;
    type: string;
    onClick: () => void;
    buttonStyle: string;
    buttonSize: string;
    buttonColor: string;
}

const Button: FC<ButtonProps> = ({type,
                                  buttonColor,
                                  buttonSize,
                                  buttonStyle,
                                  onClick,
                                  children}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : COLORS[0];

    return (
        <>
            <button className={`btn 
            ${checkButtonStyle} 
            ${checkButtonSize} 
            ${checkButtonColor}`}>
                {children}
            </button>
        </>
    );
}

export default Button;