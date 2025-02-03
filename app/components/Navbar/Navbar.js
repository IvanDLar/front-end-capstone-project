import styles from "./navbar.module.css";
import Image from "next/image";
import Link from 'next/link'


import { Karla } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const karla = Karla({ subsets: ['latin'] })

export default function Navbar() {
    return (
        <nav style={styles.nav}>
            <div>
                <Image
                    src="../little-lemon-logo.svg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt="Little Lemon Logo"
                />
            </div>
            <div className = {styles["list-section"]}>
                <ul className = {styles.list}>
                    <li className = {styles["list-element"]}>
                        <a className = {`${karla.className} ${styles["list-element-text"]}`} href="/">
                            Home
                        </a>
                    </li>
                    <li className = {styles["list-element"]}>
                        <a className = {`${karla.className} ${styles["list-element-text"]}`} href="/#about">
                            About
                        </a>
                    </li>
                    <li className = {styles["list-element"]}>
                        <a className = {`${karla.className} ${styles["list-element-text"]}`} href="/#menu">
                            Menu
                        </a>
                    </li>
                    <li className = {styles["list-element"]}>
                        <Link className = {`${karla.className} ${styles["list-element-text"]}`} href="/bookings">
                            Bookings
                        </Link>
                    </li>
                    <li className = {styles["list-element"]}>
                        <a className = {`${karla.className} ${styles["list-element-text"]}`} href="/">
                            Log in
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};