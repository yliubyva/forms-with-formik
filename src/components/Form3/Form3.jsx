import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import styles from "./Form3.module.css";
import { MyTextInput } from "../MyTextInput";
import { MySelect } from "../MySelect";
import { MyRadioButton } from "../MyRadioButton";
import { Modal } from "../Modal";

export const Form3 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => setIsModalOpen(false);

    const areaCodes = [
        { code: '1', label: '+1 (USA)' },
        { code: '44', label: '+44 (UK)' },
        { code: '380', label: '+380 (UA)' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <div className={styles.head}>
                <h1 className={styles.title}>Event registration form</h1>
            </div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    company: '',
                    email: '',
                    areaCode: '',
                    phoneNum: '',
                    subject: '',
                    isCustomer: '',
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    company: Yup.string()
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Invalid email address')
                        .required('Required'),
                    areaCode: Yup.string()
                        .oneOf(areaCodes.map((code) => code.code), 'Invalid area code') 
                        .required('Area code is required'),
                    phoneNum: Yup.string()
                        .matches(/^[1-9]\d{6,9}$/, 'Phone number must be 7-10 digits and cannot start with 0') 
                        .required('Phone number is required'),
                    subject: Yup.string()
                        .oneOf(
                            ['subject1', 'subject2', 'subject3'],
                            'Invalid Subject Type'
                        )
                        .required('Required'),
                        isCustomer: Yup.string()
                        .oneOf(['yes', 'no'], 'Choose the correct option')
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
                        <div className={styles.field}>
                            <span>Name</span>
                            <div className={styles.groupInputs}>
                                <MyTextInput
                                    label="First Name"
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    inputStyle={styles.input}
                                    labelStyle={styles.label}
                                    containerStyle={styles.inputContainer}
                                />

                                <MyTextInput
                                    label="Last Name"
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    inputStyle={styles.input}
                                    labelStyle={styles.label}
                                    containerStyle={styles.inputContainer}
                                />
                            </div>
                        </div>
                        <div className={styles.field}>
                            <span>Company</span>
                            <MyTextInput
                                id="company"
                                name="company"
                                type="text"
                                inputStyle={styles.input}
                                containerStyle={styles.fieldContainer}
                            />
                        </div>

                        <div className={styles.field}>
                            <span>Email</span>
                            <MyTextInput
                                id="email"
                                name="email"
                                type="email"
                                inputStyle={styles.input}
                                containerStyle={styles.fieldContainer}
                            />
                        </div>

                        <div className={styles.field}>
                            <span>Phone</span>
                            <div className={styles.phoneInputs}>
                                <MySelect
                                    id="areaCode"
                                    label="Area Code"
                                    name="areaCode"
                                    selectStyle={styles.input}
                                    labelStyle={styles.label}
                                    containerStyle={styles.inputContainer}
                                >
                                    <option value="" disabled>Select area code</option>
                                    <option value="1">+1 (USA)</option>
                                    <option value="44">+44 (UK)</option>
                                    <option value="380">+380 (UA)</option>
                                </MySelect>

                                <MyTextInput
                                    id="phoneNum"
                                    label="Phone Number"
                                    name="phoneNum"
                                    type="tel"
                                    inputStyle={styles.input}
                                    labelStyle={styles.label}
                                    containerStyle={styles.inputContainer}
                                />
                            </div>
                        </div>

                        <div className={styles.field}>
                            <span>Subject</span>
                            <MySelect
                                id="subject"
                                name="subject"
                                selectStyle={styles.input}
                                containerStyle={styles.fieldContainer}
                            >
                                <option value="" disabled>Choose option</option>
                                <option value="subject1">Subject 1</option>
                                <option value="subject2">Subject 2</option>
                                <option value="subject3">Subject 3</option>
                            </MySelect>
                        </div>

                        <div className={styles.radioContainer}>
                            <span>Are you an existing customer?</span>
                            <div className={styles.buttons}>
                                <MyRadioButton
                                    name="isCustomer"
                                    value="yes"
                                    labelStyle={styles.radioLabel}
                                    inputStyle={styles.radio}
                                >
                                    Yes
                                    <span className={styles.checkmark}></span>
                                </MyRadioButton>
                                <MyRadioButton
                                    name="isCustomer"
                                    value="no"
                                    labelStyle={styles.radioLabel}
                                    inputStyle={styles.radio}
                                >
                                    No
                                    <span className={styles.checkmark}></span>
                                </MyRadioButton>
                            </div>
                        </div>

                        <button type="submit" className={styles.button}>Register</button>

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