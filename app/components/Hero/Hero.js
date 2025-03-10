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
            Welcome to <b> Little Lemon </b> – Chicago’s hidden gem where the warmth of the Mediterranean meets the energy of the Windy City! Inspired by time-honored family recipes and the fresh flavors of coastal cuisine, Little Lemon brings a taste of sun-drenched shores right to Chicago’s bustling streets. <br/><br/> Come join us—and discover the vibrant Mediterranean spirit in the heart of Chicago!
            </p>
          </div>
          <a href="/book_table" className = {styles["booking-button-link"]}>
            <Button
                text = "Book a table"
                type = "primary"
                size = "large-hero"
            />
          </a>
        </div>
        <div className = {styles["hero-right-section"]}>
          <Image
            src="../restaurant-reception.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="Two cooks laughing"
            className={styles["hero-image"]}
          />
        </div>
      </article>
    );
};