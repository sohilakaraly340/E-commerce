import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Contact.module.css";
import CloseIcon from '@mui/icons-material/Close';
import emailjs from 'emailjs-com';

export default function Contact() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  
  const validationSchema = Yup.object({
    name: Yup.string().required("required"),
    email: Yup.string().email("invalid email format").required("required"),
  });

  const [submit, setSubmit] = useState(false);

  const onSubmit = (values, { resetForm }) => {
    emailjs.sendForm('service_952121l', 'template_i3i356e', document.getElementById('form'), 'LpuzWvZjwAwGMJpwV')
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      resetForm({ values: "" });
      setSubmit(true)
    }, (error) => {
      console.log('Error sending email:', error.text);
    });
   
  };

  return (
  <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form id="form">
        <label htmlFor="name">name</label>
        <Field type="text" id="name" name="name" placeholder="name" />
        <ErrorMessage name="name">
          {(e) => <div className={styles.errors}>{e}</div>}
        </ErrorMessage>

        <label htmlFor="email">E-mail</label>
        <Field type="email" id="email" name="email" placeholder="email" />
        <ErrorMessage name="email">
          {(e) => <div className={styles.errors}>{e}</div>}
        </ErrorMessage>

        <label htmlFor="message">message</label>
        <Field as="textarea" id="message" name="message" placeholder="message" />

        <button type="submit">Submit</button>

        
      </Form>
    </Formik>
    {submit && (
      <div className={styles.popup__overlay}>
        <div className={styles.popup__content}>
          <CloseIcon onClick={() => setSubmit(false)} className={styles.close}/>
          <h2>Thanks for contacting us</h2>
        </div>
      </div>
    )}
  </>
  );
}
