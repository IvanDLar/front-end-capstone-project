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
                <a href="/menu">
                    <Button
                        text = "Menu"
                        type = "secondary"
                        size = "medium"
                    />
                </a>
            </div>
            <div className = {styles["card-section"]}>
                <Card title = "Greek Salad"
                        price = "9.99"
                        description = "A crisp medley of cucumbers, tomatoes, olives, and red onions, topped with tangy feta and drizzled with a fresh lemon-olive oil dressing."
                        imageUrl="../greek-salad.svg"
                        imageAlt="Greek Salad picture"/>
                <Card title = "Lemon Pie"
                        price = "5.99"
                        description = "A buttery, flaky crust cradles a velvety lemon filling, striking the perfect balance between tang and sweetness in every slice."
                        imageUrl="../lemon-dessert.svg"
                        imageAlt="Lemon Dessert picture"/>
                <Card title = "Lime Beef"
                        price = "15.99"
                        description = "Succulent cuts of beef are marinated in a bright lemon blend and aromatic herbs, then perfectly seared to lock in a tangy, savory flavor in every bite."
                        imageUrl="../lime-beef.svg"
                        imageAlt="Lime Beef picture"/>
            </div>
        </div>
    );
};