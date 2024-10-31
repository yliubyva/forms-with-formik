import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Form1.module.css";
import { MyTextInput } from "../MyTextInput";
import { MyCheckbox } from "../MyCheckBox";
import { Modal } from "../Modal";

export const Form1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <div className={styles.text}>
                    <h1 className={styles.title}>Звʼязатися з нами</h1>
                    <p className={styles.subtitle}>Залиш нам повідомлення, а ми відповімо якнайшвидше</p>
                </div>
                <img src="/public/contact.svg" alt="illustration" />
            </div> 
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    tel: '',
                    message: '',
                    sendUpdates: false,
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(4, 'Юзернейм повинен містити мінімум 4 символи')
                        .required('Поле обовʼязкове'),
                    email: Yup.string()
                        .email('Неправильна адреса електронної пошти')
                        .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Неправильний формат електронної пошти')
                        .required('Поле обовʼязкове'),
                    tel: Yup.string()
                        .matches(/^\+380\d{9}$/, 'Номер телефону повинен бути у форматі +380XXXXXXXXX')
                        .required('Поле обовʼязкове'),
                    message: Yup.string()
                        .min(10, 'Повідомлення має бути не менше 10 символів')
                        .required('Поле обовʼязкове'),
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
                        <div className={styles.name}>
                            <MyTextInput
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Імʼя та призвище"
                                inputStyle={styles.input}
                            />
                        </div>
                        <div className={styles.email}>
                            <MyTextInput
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                inputStyle={styles.input}
                            />
                        </div>
                        <div className={styles.tel}>
                            <MyTextInput
                                id="tel"
                                name="tel"
                                type="tel"
                                placeholder="Телефон (у форматі +380)"
                                inputStyle={styles.input}
                            />
                        </div>
                        <div className={styles.message}>
                            <Field id="message" name="message" as="textarea" placeholder="Повідомлення" className={styles.textarea} />
                            <ErrorMessage name="message" component="div" className="error" /> 
                        </div>
                        <div className={styles.check}>
                            <MyCheckbox name="sendUpdates">
                                <span className={styles.box}>Надсилати мені оновлення про академію</span>
                            </MyCheckbox>
                        </div>
                        <button type="submit" className={styles.button}>Надіслати</button>
                    </div>
                </Form>
            </Formik>
            <Modal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                message="Ваші данні успішно відправленно!" 
                textButton="Закрити" 
            />
        </div>
    )
}