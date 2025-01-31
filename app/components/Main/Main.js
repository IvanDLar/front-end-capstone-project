import About from "../About/About";
import Hero from "../Hero/Hero";
import Specials from "../Specials/Specials";
import styles from "./main.module.css"

export default function Main() {
    return (
        <main className={styles["main-section"]}>
            <Hero/>
            <Specials/>
            <About/>
        </main>
    );
};