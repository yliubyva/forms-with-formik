import { useState } from "react";
import { Form1 } from "../Form1";
import { Form2 } from "../Form2";
import { Form3 } from "../Form3";
import styles from "./Tabs.module.css";

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={() => setActiveTab(1)}>Форма 1</button>
                <button className={styles.button} onClick={() => setActiveTab(2)}>Форма 2</button>
                <button className={styles.button} onClick={() => setActiveTab(3)}>Форма 3</button>
            </div>

            <div className={styles.divider}></div>

            <div>
                {activeTab === 1 && <Form1 />}
                {activeTab === 2 && <Form2 />}
                {activeTab === 3 && <Form3 />}
            </div>
        </div>
    )
}