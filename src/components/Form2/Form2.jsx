import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import styles from "./Form2.module.css";
import { MyTextInput } from "../MyTextInput";
import { MySelect } from "../MySelect";
import { MyRadioButton } from "../MyRadioButton";
import { Modal } from "../Modal";

export const Form2 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => setIsModalOpen(false);
    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <h1 className={styles.title}>Registration Form</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    birthday: '',
                    gender: '',
                    email: '',
                    tel: '',
                    subject: '',
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    birthday: Yup.date()
                        .max(new Date(), 'The date of birth cannot be in the future')
                        .min(new Date(new Date().setFullYear(new Date().getFullYear() - 120)), 'The date of birth cannot be more than 120 years ago')
                        .required('Required'),
                    gender: Yup.string()
                        .oneOf(['male', 'female'], 'Choose the correct option')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Invalid email address')
                        .required('Required'),
                    tel: Yup.string()
                        .matches(/^\+380\d{9}$/, 'The phone number must be in the format +380XXXXXXXXX')
                        .required('Required'),
                    subject: Yup.string()
                        .oneOf(
                            ['subject1', 'subject2', 'subject3'],
                            'Invalid Subject Type'
                        )
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        resetForm();
                        setIsModalOpen(true);
                    }, 400);
                }}
            >
                <Form>
                    <div className={styles.layout}>
                        <div>
                            <MyTextInput
                                label="First Name"
                                id="firstName"
                                name="firstName"
                                type="text"
                                inputStyle={styles.input}
                                labelStyle={styles.label}
                                containerStyle={styles.fieldContainer}
                            />
                        </div>
                        <div>
                            <MyTextInput
                                label="Last Name"
                                id="lastName"
                                name="lastName"
                                type="text"
                                inputStyle={styles.input}
                                labelStyle={styles.label}
                                containerStyle={styles.fieldContainer}
                            />
                        </div>
                        <div>
                            <MyTextInput
                                label="Birthday"
                                id="birthday"
                                name="birthday"
                                type="date"
                                inputStyle={styles.input}
                                labelStyle={styles.label}
                                containerStyle={styles.fieldContainer}
                            />
                        </div>
                        <div>
                            <span className={styles.label}>Gender</span>
                            <div className={styles.radioContainer}>
                                <MyRadioButton 
                                    name="gender" 
                                    value="male" 
                                    labelStyle={styles.radioLabel} 
                                    inputStyle={styles.radio}
                                >
                                    Male
                                    <span className={styles.checkmark}></span>
                                </MyRadioButton>
                                <MyRadioButton 
                                    name="gender" 
                                    value="female" 
                                    labelStyle={styles.radioLabel} 
                                    inputStyle={styles.radio}
                                >
                                    Female
                                    <span className={styles.checkmark}></span>
                                </MyRadioButton>
                            </div>
                        </div>
                        <div>
                            <MyTextInput
                                label="Email"
                                id="email"
                                name="email"
                                type="email"
                                inputStyle={styles.input}
                                labelStyle={styles.label}
                                containerStyle={styles.fieldContainer}
                            />
                        </div>
                        <div>
                            <MyTextInput
                                label="Phone Number"
                                id="tel"
                                name="tel"
                                type="tel"
                                inputStyle={styles.input}
                                labelStyle={styles.label}
                                containerStyle={styles.fieldContainer}
                            />
                        </div>
                        <div className={styles.selectContainer}> 
                            <MySelect 
                                label="Subject" 
                                id="subject"
                                name="subject" 
                                selectStyle={styles.select} 
                                containerStyle={styles.fieldContainer} 
                                labelStyle={styles.label} 
                            >
                                <option value="" disabled>Choose option</option>
                                <option value="subject1">Subject 1</option>
                                <option value="subject2">Subject 2</option>
                                <option value="subject3">Subject 3</option>
                            </MySelect>
                        </div>
                        <button type="submit" className={styles.button}>Submit</button>
                    </div>
                </Form>
            </Formik>
            <Modal 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                message="Registration successful!"
                textButton="Close"
            />
        </div>
    )
}