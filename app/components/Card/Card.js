import styles from "./card.module.css";
import Image from "next/image";

export default function Card(props) {
    const title = props.title;
    const price = props.price;
    const description = props.description;
    const imageUrl = props.imageUrl;
    const altText = props.imageAlt;

    return(
        <div className={styles["specials-card"]}>
            <Image
                src = {imageUrl}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt = {altText}
                className={styles["card-image"]}
            />
            <div className={styles["card-info-section"]}>
                <div className={styles["card-first-row"]}>
                    <h3 className={styles["card-title"]}>
                        {title}
                    </h3>
                    <div className={styles["card-price"]}>
                        ${price}
                    </div>
                </div>
                <p className={styles["card-description"]}>
                    {description}
                </p>
                <a href={"/menu"} className={styles["order-delivery"]}>
                    {"Order a delivery ->"}
                </a>
            </div>
        </div>
    )
};