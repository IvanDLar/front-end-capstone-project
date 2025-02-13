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
        "large-hero": styles["button-large-hero"],
        "medium": styles["button-medium"],
        "medium-link": styles["button-medium-link"],
        "small": styles["button-small"],
        "small-navbar": styles["button-small-navbar"],
    };

    const text = props.text;
    // Small, Mediuma, Large
    const size = props.size;
    const type = props.type;
    // based on tyle extract the button style
    const buttonStyle = typeMap[type];
    const buttonSize = sizeMap[size];
    const isButtonDisabled = props.disabled || null;
    return (
        <button className={`${styles.button} ${buttonStyle} ${buttonSize}`}
                onClick={props.onClick || null}
                type = {props.buttonType || null}
                disabled = {isButtonDisabled}>
                    {text}
        </button>
    );
};