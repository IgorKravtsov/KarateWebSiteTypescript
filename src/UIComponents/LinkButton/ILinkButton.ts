import React from "react";

export interface ILinkButton {
    view?: 'filled' | 'outline';
    to: string;
    children?: React.ReactNode;
    classes?: string;
}