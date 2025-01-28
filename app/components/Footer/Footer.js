import styles from "./footer.module.css";
import Image from "next/image";
import { Karla } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const karla = Karla({ subsets: ['latin'] })

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Image
                src="../Laughing.svg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '15%', height: 'auto' }}
                alt="Two cooks laughing"
            />
            <div className={styles["footer-text-section"]}>
                <div className={styles["footer-text-column"]}>
                    <h3 className={`${styles["footer-title"]} ${karla.className}`}>
                        Doormat Navigation
                    </h3>
                    <ul>
                        <li className={`${styles["footer-text"]} ${karla.className}`}>
                            Home
                        </li>
                        <li className={`${styles["footer-text"]} ${karla.className}`}>
                            About
                        </li>
                        <li className={`${styles["footer-text"]} ${karla.className}`}>
                            Menu
                        </li>
                        <li className={`${styles["footer-text"]} ${karla.className}`}>
                            Reservation
                        </li>
                        <li className={`${styles["footer-text"]} ${karla.className}`}>
                            Order Online
                        </li>
                        <li className={`${styles["footer-text"]} ${karla.className}`}>
                            Login
                        </li>
                    </ul>
                </div>
                <div className={styles["footer-text-column"] }>
                    <h3 className={`${styles["footer-title"]} ${karla.className}`}>
                        Contact
                    </h3>
                    <ul>
                        <li className={`${styles["footer-text"]} ${karla.className}`}>
                            Address
                        </li>
                        <li className={`${styles["footer-text"]} ${karla.className}`}>
                            Phone Number
                        </li>
                        <li className={`${styles["footer-text"]} ${karla.className}`}>
                            Email
                        </li>
                    </ul>
                </div>
                <div className={styles["footer-text-column"]}>
                    <h3 className={`${styles["footer-title"]} ${karla.className}`}>
                        Social Media Links
                    </h3>
                    <ul>
                        <li className={`${styles["footer-text"]} ${karla.className}`}>
                            Instagram
                        </li>
                        <li className={`${styles["footer-text"]} ${karla.className}`}>
                            Facebook
                        </li>
                        <li className={`${styles["footer-text"]} ${karla.className}`}>
                            Twitter
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};