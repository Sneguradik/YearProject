import React, {MutableRefObject} from "react";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children?: React.ReactNode,
  text?: string,

}

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
  label?: string
  Icon?: JSX.ElementType
  onClickIcon? : Function,
  InnerClassName? : string,
  inputRef?: MutableRefObject<HTMLInputElement>,
}
