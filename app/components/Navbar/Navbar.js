import styles from "./navbar.module.css";
import Image from "next/image";

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
                        <a className = {`${karla.className} ${styles["list-element-text"]}`}>
                            Home
                        </a>
                    </li>
                    <li className = {styles["list-element"]}>
                        <a className = {`${karla.className} ${styles["list-element-text"]}`}>
                            About
                        </a>
                    </li>
                    <li className = {styles["list-element"]}>
                        <a className = {`${karla.className} ${styles["list-element-text"]}`}>
                            Menu
                        </a>
                    </li>
                    <li className = {styles["list-element"]}>
                        <a className = {`${karla.className} ${styles["list-element-text"]}`}>
                            Reservations
                        </a>
                    </li>
                    <li className = {styles["list-element"]}>
                        <a className = {`${karla.className} ${styles["list-element-text"]}`}>
                            Order Online
                        </a>
                    </li>
                    <li className = {styles["list-element"]}>
                        <a className = {`${karla.className} ${styles["list-element-text"]}`}>
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};