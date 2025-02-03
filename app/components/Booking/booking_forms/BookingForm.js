"use client";

import {React, useEffect, useState} from 'react';
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ToastStyles from "./toast.module.css";
import styles from "./booking-forms.module.css"
import Button from '../../Button/Button';
import Link from 'next/link';
import { Toaster, toast } from 'react-hot-toast';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  phoneNumber: Yup.string()
    .required("Required")
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, "Too short")
    .max(10, "Too long"),
  comment: Yup.string()
    .min(10, "Comment is too short"),
  availableDates: Yup.string()
    .required("Required, please choose a Date"),
  availableTimes: Yup.string()
    .required("Required, please choose a Time"),
  guests: Yup.string()
    .required("Required"),
});


export default function BookingForms () {
  const router = useRouter();
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [chosenISODate, setChosenISODate] = useState("");

  const getAvailableDates = async () => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/get_available_dates");
        const result = await response.json();
        setAvailableDates(result);
        // Default value
        setChosenISODate(result.dates[0]);
      } catch(e) {
        console.log(e);
      }
    }
    await fetchData();
  }

const getAvailableTimes = async () => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/get_available_times?date=${chosenISODate}`);
      const result = await response.json();
      setAvailableTimes(result);
    } catch(e) {
      console.log(e);
    }
  }
  fetchData()
}

useEffect(() => {
  getAvailableDates()
}, [])

useEffect(() => {
  getAvailableTimes()
}, [availableDates])

const handleDateChange = (e) => {
  setChosenISODate(e.target.value);
  getAvailableTimes();
  console.log(availableTimes);
}

const submitForm = async (e) => {
  try {
    e.preventDefault()

    const formData = new FormData(e.target)
    const values = Object.fromEntries(formData.entries()) // Extract values properly
    console.log("TARGET", formData)
    const response = await fetch('http://localhost:3000/api/submit_forms', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    toast.custom((t) => {
      // Redirect automatically after forms submittion
      setTimeout(() => {
        toast.dismiss(t.id);
        router.push("/");
      }, 5000);
      return (
      <div className={`${ToastStyles.toastContainer} ${t.visible ? ToastStyles.enter : ToastStyles.leave}`}>
          <div className={ToastStyles.toastContent}>
              <p className={ToastStyles.toastTitle}>✅ Reservation Confirmed!</p>
              <p><strong>Name:</strong> {values.firstName} {values.lastName}</p>
              <p><strong>Email:</strong> {values.email}</p>
              <p><strong>Phone:</strong> {values.phoneNumber}</p>
              <p><strong>Date & Time:</strong> {values.availableDates} @ {values.availableTimes}</p>
              <p><strong>Guests:</strong> {values.guests}</p>
          </div>
          <Link href={"/"} className={ToastStyles.closeLink}>
            <button onClick={() => toast.dismiss(t.id)} className={ToastStyles.closeButton}>
                Close
            </button>
          </Link>
      </div>
      );
      setTimeout(() => resetForm(), 2000);
  },
  {
    duration: 10000,
  }
  );
  } catch {
    console.error("Submission error:", error);
    toast.error("Something went wrong. Please try again.");
  }
}


return (
  <div className={styles["booking-forms-section"]}>
    <div><Toaster/></div>
    <Formik
      enableReinitialize
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        comment: '',
        availableDates: availableDates?.dates?.[0] || '',
        availableTimes: availableTimes?.dates?.[0] || '',
        guests: '',
      }}
      validateOnMount={true}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched, isValid }) => (
        <form className={styles["form-container"]} onSubmit={submitForm}>
          <div>
            <label className={styles["label"]}>First Name</label>
            <Field name="firstName" className={styles["forms-box"]}/>
              {errors.firstName && touched.firstName ?
                <div className={styles["input-error"]}>
                  {errors.firstName}
                </div>
              : null}
          </div>
          <div>
            <label className={styles["label"]}>Last Name</label>
            <Field name="lastName" className={styles["forms-box"]}/>
              {errors.lastName && touched.lastName ?
                <div className={styles["input-error"]}>
                  {errors.lastName}
                </div>
              : null}
          </div>
          <div>
            <label className={styles["label"]}>Email</label>
            <Field name="email" type="email" className={styles["forms-box"]}/>
              {errors.email && touched.email ?
                <div className={styles["input-error"]}>
                  {errors.email}
                </div>
              : null}
          </div>
          <div>
            <label className={styles["label"]}>Phone Number</label>
            <Field name="phoneNumber" type="phoneNumber" className={styles["forms-box"]}/>
              {errors.phoneNumber && touched.phoneNumber ?
                <div className={styles["input-error"]}>
                  {errors.phoneNumber}
                </div>
              : null}
          </div>
          <div>
            <label className={styles["label"]}>Comment</label>
            <Field name="comment" type="comment" className={`${styles["forms-box"]} ${styles["comment"]}`}/>
              {errors.comment && touched.comment ?
                <div className={styles["input-error"]}>
                  {errors.comment}
                </div>
              : null}
          </div>
          <div>
            <label className={styles["label"]}>Available Dates</label>
            <Field as="select"
                    name="availableDates"
                    type="availableDates"
                    value = {chosenISODate}
                    onChange={(e) => {handleDateChange(e)}}
                    className={`${styles["forms-box"]}`}>
              {
                availableDates?.dates?.length > 0 ? (
                    availableDates.dates.map((date, idx) => {
                      return (
                        <option key={idx} value={date}>
                          {date}
                        </option>
                      );
                  })
                  ) : (
                  <option value="">Loading dates...</option>
              )}
            </Field>
              {errors.availableDates && touched.availableDates ?
                <div className={styles["input-error"]}>
                  {errors.availableDates}
                </div>
              : null}
          </div>
          <div>
            <label className={styles["label"]}>Available Times</label>
            <Field as="select"
                    name="availableTimes"
                    type="availableTimes"
                    className={`${styles["forms-box"]}`}>
              <option value="" disabled>Choose a date...</option>
              {
                availableTimes?.availableTimes?.length > 0 ? (
                  availableTimes.availableTimes.map((date, idx) => {
                      return (
                        <option key={idx} value={date}>
                          {date}
                        </option>
                      );
                  })
                  ) : (
                  <option value="">Loading times...</option>
              )}
            </Field>
              {errors.availableTimes && touched.availableTimes ?
                <div className={styles["input-error"]}>
                  {errors.availableTimes}
                </div>
              : null}
          </div>
          <div>
            <label className={styles["label"]}>Number of Guests</label>
            <Field name="guests" type="guests" className={`${styles["forms-box"]}`}/>
              {errors.guests && touched.guests ?
                <div className={styles["input-error"]}>
                  {errors.guests}
                </div>
              : null}
          </div>
          <div className={styles["buttons-row"]}>
            <Link href={`/`}>
              <Button
                  text = "Cancel"
                  type = "secondary"
                  size = "medium-link"
                  buttonType = "button"
              />
            </Link>
            <Button
                text = "Submit"
                type = "primary"
                size = "medium-link"
                buttonType = "submit"
                disabled = {!isValid}
            />
          </div>
        </form>
      )}
    </Formik>
  </div>
);
}