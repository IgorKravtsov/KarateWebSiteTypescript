import React from "react";

export interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}