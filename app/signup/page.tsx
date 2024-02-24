"use client"
import styles from "@/styles/pages/auth/Auth.module.scss"
import Input from "@/components/UIKit/Input";
import {FaKey, FaUserCircle} from "react-icons/fa";
import Button from "@/components/UIKit/Button";
import {MdAlternateEmail} from "react-icons/md";
import {useState} from "react";
import HSE_Logo from "@/resourses/HSE_Logo";


export default function RegPage() {

  const [shown, setShown] = useState(false);

  return(
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Sign up</h2>
        <Input label={"Username"} Icon={FaUserCircle}/>
        <Input label={"Email"} Icon={MdAlternateEmail}/>
        <Input label={"Password"} Icon={FaKey} type={shown?"text":"password"} onClickIcon={()=>setShown(prevState => !prevState)}/>
        <Input label={"Password again"} Icon={FaKey} type={shown?"text":"password"} onClickIcon={()=>setShown(prevState => !prevState)}/>
        <Button text={"Login"}  className={styles.auth_btn}/>
        <Button className={styles.hse_btn}><HSE_Logo/>Auth with HSE</Button>
      </div>
    </div>
  );
}
