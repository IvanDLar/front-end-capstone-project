import styles from "./hero.module.css";
import Button from "../Button/Button";
import Image from "next/image";

export default function Hero() {
    return(
    <article id = "home" className = {styles["hero-section"]}>
        <div className = {styles["hero-left-section"]}>
          <div className = {styles["hero-text"]}>
            <h1 className = {styles["page-title"]}>
                Little Lemon
            </h1>
            <h2 className = {styles["page-sub-title"]}>
                Chicago
            </h2>
            <p className = {styles["hero-description"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
            <Button
                text = "Book a table"
                type = "primary"
                size = "large"
            />
        </div>
        <div className = {styles["hero-right-section"]}>
          <Image
            src="../restaurant-reception.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="Two cooks laughing"
          />
        </div>
      </article>
    );
};