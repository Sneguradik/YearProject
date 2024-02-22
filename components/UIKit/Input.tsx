"use client"
import {IInput} from "@/components/UIKit/interfaces";
import {ContactStyles} from "@/Logic/Utils";
import styles from "@/styles/components/UIKit/Input.module.scss";

export default function Input({label, Icon, onClickIcon , InnerClassName, inputRef,...props}:IInput) {
  return(
    <div className={ContactStyles(styles.container)}>
      {label?<label className={styles.label}>{label}</label>:null}
      <div>
        <input ref={inputRef} {...props} />
        {Icon?<Icon onClick={onClickIcon}/>:null}
      </div>
    </div>
  )
}
