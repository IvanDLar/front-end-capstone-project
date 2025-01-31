"use client"

import styles from "./button.module.css";

export default function Button(props) {
    const typeMap = {
        "primary": styles["button-primary"],
        "secondary": styles["button-secondary"],
        "tertiary": styles["button-tertiary"],
        "disable": styles["button-disable"]
    }

    const sizeMap = {
        "large": styles["button-large"],
        "medium": styles["button-medium"],
        "small": styles["button-small"],
    };

    const text = props.text;
    // Small, Mediuma, Large
    const size = props.size;
    const type = props.type;
    // based on tyle extract the button style
    const buttonStyle = typeMap[type];
    const buttonSize = sizeMap[size];
    return (
        <button className={`${styles.button} ${buttonStyle} ${buttonSize}`}>{text}</button>
    );
};