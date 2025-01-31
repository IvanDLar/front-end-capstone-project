import styles from "./about.module.css"
import Image from "next/image";

export default function About() {
    return (
        <article className = {styles["about-section"]}>
        <div className = {styles["about-left-section"]}>
          <div className = {styles["about-text"]}>
            <h1 className = {styles["page-title"]}>
                About Us
            </h1>
            <p className = {styles["about-description"]}>
            At Little Lemon, we believe that great food brings people together. <br/>
            Founded five years ago by passionate chefs Samir and Tomas, our restaurant is a celebration of fresh ingredients, bold flavors, and heartfelt hospitality. <br/> <br/>
            With years of culinary experience and a shared love for cooking, Samir and Tomas set out to create a warm and welcoming space where every dish tells a story. From handcrafted recipes to carefully curated flavors, our mission is simple: to make people happy with food. <br/> <br/> Whether you're here for a comforting meal or an adventurous bite, Little Lemon is your home for unforgettable dining experiences.
            </p>
          </div>
        </div>
        <div className = {styles["about-right-section"]}>
          <Image
            src="../chefs-talking.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="Two cooks laughing"
          />
        </div>
      </article>
    );
}