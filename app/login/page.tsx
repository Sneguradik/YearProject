"use client"
import Input from "@/components/UIKit/Input";
import {FaKey, FaUserCircle} from "react-icons/fa";
import Button from "@/components/UIKit/Button";
import styles from "@/styles/pages/auth/Auth.module.scss";

export default function LoginPage() {
  return(
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Login</h2>
        <Input label={"Username"} Icon={FaUserCircle}/>
        <Input label={"Password"} Icon={FaKey} type={"password"}/>
        <Button text={"Login"}  className={styles.auth_btn}/>
      </div>
    </div>
  );
}
