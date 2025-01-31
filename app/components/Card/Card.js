import styles from "./card.module.css";
import Image from "next/image";

export default function Card(props) {
    return(
        <div className={styles["specials-card"]}>
            <Image
                src = {props.imageUrl}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt = {props.imageAlt}
            />
            <div className={styles["card-info-section"]}>
                <div className={styles["card-first-row"]}>
                    <h3 className={styles["card-title"]}>
                        Greek Salad
                    </h3>
                    <div className={styles["card-price"]}>
                        $9.99
                    </div>
                </div>
                <p className={styles["card-description"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a className={styles["order-delivery"]}>
                    Order a delivery -
                </a>
            </div>
        </div>
    )
};