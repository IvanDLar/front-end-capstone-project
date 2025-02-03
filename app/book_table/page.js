import BookingForms from "../components/Booking/booking_forms/BookingForm";
import Navbar from "../components/Navbar/Navbar";
import styles from "./page.module.css";

export default function Booking() {
    return (
    <>
        <Navbar/>
        <div className={styles["page"]}>
            <BookingForms/>
        </div>
    </>
    );
};