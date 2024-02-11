import {IButton} from "@/components/UIKit/interfaces";
import styles from "@/styles/components/UIKit/Button.module.scss";
import {ContactStyles} from "@/Logic/Utils";

export default function Button({children, className,text , ...props}:IButton) {
  return(
    <button {...props} className={ContactStyles(className,styles.layout,styles.default_style )}>{children?children:text}</button>
  )
}

