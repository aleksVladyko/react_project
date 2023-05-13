// страница для авторизованного пользователя
// страница редактирования рецепта
import React, { useEffect, useRef, useState } from "react";
import uuidv4 from "react-uuid"; // получаем генератор id
import FormAddIngredient from "../../Modal/FormAddIngredient";
const objIngredients = [
    // {
    //     id: '',
    //     prop: '',
    // },
];
const Recipe = (props) => {
    const myRef = useRef();

    const [isOpen, setIsOpen] = useState(false);
    const [ingredient, setIngredient] = useState(objIngredients);
    const [getIngredient, setGetIngredient] = useState("");
    const [myid, setMyid] = useState(1);

    function openModal () {setIsOpen(true)};

    function onChange() {
        const textLength = myRef.current.value;
        setGetIngredient(textLength);

    }
    const addIngredient = () => {
        //сделать проверку на длину массива
        const newIngredient = {
            // id: uuidv4(), // генератор id 
            id: myid,
            prop: getIngredient,
        };
        setMyid(myid + 1); // или через состояние
        setIngredient([...ingredient, newIngredient]);
        setGetIngredient("");
        console.log(newIngredient);
    };

    const oneIngredient = ingredient.map((obj) => {
        return (
            <li className="list-group-item" key={obj.id}>
                {obj.prop}
            </li>
        );
    });
    // добавить кнопку удаления ингредиента
    // добавить фичу скролинга при увиличении списка ингредиентов

    // disabled на кнопке по умолчанию тру !getIngredient проверяет начат ли ввод и проверяет длину ввода
    // если условия удовлетворенны disabled становится false
    return (
        <>
            <div className="container card col-3 m-2 bg-body-secondary ">
                <img
                    className="card-img-top "
                    src={require("../../../images/samosa-recipe.jpg")}
                    alt="samosa-recipe"
                    width="200"
                    height="200"
                />
                <div className="card-body">
                    <h3 className="card-title text-center">{props.name}</h3>
                    <p className="card-text">
                        Небольшой пример текста, который должен основываться на
                        названии карты и составлять основную часть содержимого
                        карты.!!!
                    </p>
                    <ol className="list-group list-group-numbered">
                        {oneIngredient}
                    </ol>
                </div>
                <div className="row g-1">
                    <div className="col">
                        <input ref={myRef}
                    value={getIngredient}
                    onChange={onChange} type="text" className="form-control" name="ingredient" placeholder="ингредиент" aria-label="Ингредиенты"/>
                    </div>
                    <div className="col-3">
                        <input type="number" step={0.5} className="form-control" placeholder="Вес" aria-label="Вес"/>
                    </div>
                    <div className="col-2">
                    <select className="form-control" >
                                <option value="грамм">гр.</option>
                                <option value="упаковка">кг.</option>
                                <option value="миллитр">мл.</option>
                                <option value="упаковка">л.</option>
                                <option value="штук">шт.</option>
                                <option value="упаковка">уп.</option>
                                <option value="упаковка">зуб.</option>
                                <option value="упаковка">ч.л.</option>
                                <option value="упаковка">ст.л.</option>
                            </select>
                    </div>
                    <button
                    className="btn btn-outline-primary"
                    onClick={addIngredient}
                    disabled={!getIngredient || getIngredient.length < 3}
                >
                    добавить
                </button>
                <button onClick={openModal}>Open Modal</button>
                </div>

                {/* <input
                    ref={myRef}
                    value={getIngredient}
                    onChange={onChange}
                    type="text"
                    name="ingredient"
                    placeholder="введите ингредиент"
                /> */}
                
            </div>

                {isOpen && <FormAddIngredient setIsOpen={setIsOpen} />}
        </>
    );
};

export default Recipe;
