import React from "react";

export interface ISlide {
    title: React.ReactNode;
    subtitle: string;
    image: string;
    btn?: React.ReactNode;
}

export interface ISlider {
    slides: ISlide[];
}