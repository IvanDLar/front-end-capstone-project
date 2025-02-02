"use client";

import {React, useEffect, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import styles from "./booking-forms.module.css"
import Button from '../../Button/Button';
import Link from 'next/link';

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
    .required("Required"),
  guests: Yup.string()
    .required("Required"),
});


export default function BookingForms () {
  const [availableDates, setAvailableDates] = useState([]);
  const [fullAvailableDates, setFullAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  const displayAvailableDates = async () => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/get_available_dates");
          const result = await response.json();
          setFullAvailableDates(result.fullDateInfo);
          setAvailableDates(result.displayDates);
        } catch(e) {
          console.log(e);
        }
      }
      fetchData()
  }

const displayAvailableTimes = async () => {
  
}

useEffect(() => {
  displayAvailableDates()
}, [])

useEffect(() => {
  displayAvailableTimes()
}, [availableDates])

const handleSubmit = (e, errors) => {
  console.log(availableDates)
  if (errors.firstName || errors.lastName || errors.email || errors.phoneNumber || errors.comment)  {
    console.log(errors)
    toast.error("Forms invalid!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    toast.success("Information Saved!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};

return (
  <div className={styles["booking-forms-section"]}>
    <Formik
      enableReinitialize
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        comment: '',
        availableDates: availableDates[0] || '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles["form-container"]}>
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
            <Field as="select" name="availableDates" type="availableDates" className={`${styles["forms-box"]}`}>
              {
                availableDates.length > 0 ? (
                    availableDates.map((date, idx) => (
                      <option key={idx} value={date}>
                        {date}
                      </option>
                    ))
                  ) : (
                  <option value="">Loading dates...</option>
              )}
            </Field>
              {errors.comment && touched.comment ?
                <div className={styles["input-error"]}>
                  {errors.comment}
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
                text = "Next"
                type = "primary"
                size = "medium-link"
                buttonType = "submit"
                onClick={(e) => handleSubmit(e, errors)}
            />
          </div>
          <ToastContainer/>
        </Form>
      )}
    </Formik>
    {/* <Button
        text = "TEST API CALL"
        type = "primary"
        size = "medium-link"
        buttonType = "submit"
        onClick={async () => await displayAvailableDates()}
    /> */}
  </div>
);
}