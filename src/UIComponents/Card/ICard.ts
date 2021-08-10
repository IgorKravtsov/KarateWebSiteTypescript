import React, {HTMLAttributes, ReactElement} from "react";

export interface ISocialNetWork {
    svgElement: ReactElement;
    to: string;
}

export interface ICard {
    width?: number;
    height?: number;
    children?: React.ReactNode;
    classes?: string;
    img: string;
    title: string;
    subtitle: string;
    socialNetworks?: ISocialNetWork[];
    linkTo?: string;
}
