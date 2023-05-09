import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Contact.module.css";
import CloseIcon from '@mui/icons-material/Close';


export default function Contact() {
  const initialValues = {
    name: "",
    email: "",
    comments: "",
  };
  
  const validationSchema = Yup.object({
    name: Yup.string().required("required"),
    email: Yup.string().email("invalid email format").required("required"),
  });

  const [submit, setSubmit] = useState(false);

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: "" });
    setSubmit(true)
  };

  return (
  <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="name">name</label>
        <Field type="text" id="name" name="name" placeholder="name" />
        <ErrorMessage name="name">
          {(e) => <div className={styles.errors}>{e}</div>}
        </ErrorMessage>

        <label htmlFor="email">E-mail</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email">
          {(e) => <div className={styles.errors}>{e}</div>}
        </ErrorMessage>

        <label htmlFor="comments">comments</label>
        <Field as="textarea" id="comments" name="comments" />

        <button type="submit">Submit</button>

        
      </Form>
    </Formik>
    {submit && (
      <div className={styles.popup__overlay}>
        <div className={styles.popup__content}>
          <CloseIcon onClick={() => setSubmit(false)} className={styles.close}/>
          <h2>Thanks to Content us</h2>
        </div>
      </div>
    )}
  </>
  );
}
