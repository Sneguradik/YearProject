import React from "react";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children?: React.ReactNode,
  text?: string,

}
