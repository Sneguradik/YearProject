import styles from "@/styles/components/Header.module.scss"
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.nav}>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Courses</Link>
        <Link href={"/"}>Profile</Link>
      </div>
      <div className={styles.profile}>
        <div className={styles.img}>
          <Image src={"/ava.svg"} alt={""} layout={"fill"}/>
        </div>
        Mark
      </div>
    </header>
  )
}