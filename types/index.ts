import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyle?: string;
    btnType?: "button" | "submit" 
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}