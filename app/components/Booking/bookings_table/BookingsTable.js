// pages/bookings.js
"use client"

import { useEffect, useState } from "react";
import styles from "./booking-table.module.css";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("/api/get_bookings");
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bookings</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Available Date</th>
            <th>Available Time</th>
            <th>Guests</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.firstName}</td>
                <td>{booking.lastName}</td>
                <td>{booking.email}</td>
                <td>{booking.phoneNumber}</td>
                <td>{booking.availableDates}</td>
                <td>{booking.availableTimes}</td>
                <td>{booking.guests}</td>
                <td>{booking.comment || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No bookings available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
