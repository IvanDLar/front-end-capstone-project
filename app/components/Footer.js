import styles from "../page.module.css";
import Image from "next/image";

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <Image
                src="../Laughing.svg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Two cooks laughing"
            />
            <div className={styles["footer-text-section"]}>
                <div>
                    Doormat Navigation
                </div>
                <div>
                    Contact
                </div>
                <div>
                    Social Media Links
                </div>
            </div>
        </footer>
    );
};