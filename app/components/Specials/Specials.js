import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./specials.module.css"

export default function Specials(props) {
    return (
        <div id = "menu" className = {styles["specials-section"]}>
            <div className = {styles["first-specials-row"]}>
                <h1 className = {styles["page-title"]}>
                    Specials
                </h1>
                <Button
                    text = "Menu"
                    type = "secondary"
                    size = "medium"
                />
            </div>
            <div className = {styles["card-section"]}>
                <Card imageUrl="../greek-salad.svg" imageAlt="Greek Salad picture"/>
                <Card imageUrl="../lemon-dessert.svg" imageAlt="Greek Salad picture"/>
                <Card imageUrl="../lime-beef.svg" imageAlt="Greek Salad picture"/>
            </div>
        </div>
    );
};