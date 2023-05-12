import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { useEffect, useMemo, useState } from "react";

const myModalElement = document.body;

const FormAddIngredient = (props) => {
    // const [modalIsOpen, setIsOpen] = useState(false);
    const elementModal = useMemo(() => document.createElement("div"), []);
    const { setIsOpen } = props;
    useEffect(() => {
        myModalElement.appendChild(elementModal);
        return () => {
            myModalElement.removeChild(elementModal);
        };
    });

    function closeModal() {
        setIsOpen();
    }
    function handleSubmit(e) {
        e.preventDefault();
        // добавить отправку данных в массив
        // добавить закрытие модалки после отправки
    }

    // вешаем onClick={(e) => e.stopPropagation()} на  для предотвращения закрытия при клике на саму форму
    // модалки className={styles.centered}
    return createPortal(
        <div className={styles.darkBG} id="myModal" onClick={closeModal}>
            <div
                className={styles.centered}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.iconClose}>
                    <button className={styles.buttonClose} onClick={closeModal}>
                        ✖︎
                    </button>
                </div>
                <div className={styles.modalHeader}>
                    <h3>Добавьте ингредиенты</h3>
                </div>
                <form className={styles.modalContent} onSubmit={handleSubmit}>
                    <div className={styles.formContent}>
                        <input
                            className={styles.inputText}
                            type="text"
                            placeholder="ингредиент"
                        />
                    </div>
                    <div className={styles.formContent}>
                        <input
                            className={styles.inputText}
                            type="number"
                            step={0.5}
                            placeholder="вес"
                        />
                        <select className={styles.selectText}>
                            <option value="грамм">гр.</option>
                            <option value="миллитр">мл.</option>
                        </select>
                    </div>
                    <div className={styles.formContent}>
                        <input
                            className={styles.inputText}
                            type="number"
                            placeholder="кол-во"
                        />
                        <select className={styles.selectText}>
                            <option value="штук">шт.</option>
                            <option value="упаковка">уп.</option>
                        </select>
                    </div>
                    <div className={styles.formContent}>
                        <input
                            className={styles.inputText}
                            type="number" // баг при активации голосом мас заполняется строка ввода
                            placeholder="цена"
                        />
                    </div>
                    <div className={styles.formButtton}>
                        <button
                            className={styles.modalButton}
                            onClick={() => console.log("hi")}
                        >
                            Сохранить
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        elementModal
    );
};
export default FormAddIngredient;
