import Navbar from "../../components/Navbar";
import FunctionComponent from "../../components/FunctionComponent";
import ClassComponent from "../../components/ClassComponents";
import { Box } from "@mui/material";
import { useState } from "react";
import "./MainPage.css";

function MainPage() {
    const [imageWidth, setImageWidth] = useState(400);

    const buttonStyle = {
        margin: "10px 20px",
        fontSize: "1.2em"
    };

    const imageStyle = {
        float: "left",
        marginRight: "20px"
    };
    

    function increseImageHandler() {
        const value = parseInt(document.getElementById("imageFactor").value);        
        setImageWidth(imageWidth + value)
    }

    function decreseImageHandler() {
        const value = parseInt(document.getElementById("imageFactor").value);                
        setImageWidth(imageWidth - value)
    }

    function resetImageHandler() {
        setImageWidth(400)
    }

    // const name = "John";
    // const age = 20;
    // const surname = "Smith";

    // // hardcode
    // const res = "Привіт John Smith тобі вже 20 років";
    // // concatenation
    // const res = "Привіт " + name + " " + surname + " тобі вже " + age + " років";
    // // interpolation
    // const res = `Привіт ${name} ${surname} тобі вже ${age} років`



    return (
        <>
            {/* <Box sx={{textAlign: "center", mt: 3}}>
                <img width="800px" src="https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg"/>
            </Box>
            <FunctionComponent title="My first props" color="green" />
            <ClassComponent id="2" name="Mike" /> */}

            <div style={{margin: "10px"}}>
                <img
                    style={imageStyle}
                    width={`${imageWidth}px`}
                    src="https://images.unian.net/photos/2023_03/1678274109-9105.jpg?r=523256"
                    alt=""
                />
                <span className="main-text">
                    9 березня 1814 року у невеликому селі Моринці Черкаської
                    області народився хлопчик, який став Пророком для українців.
                    Йому було призначено долею розбудити нас від національної
                    сплячки. А його послання нащадкам у наш час під час війни з
                    Росією залишаються надзвичайно актуальними. Тарас Шевченко
                    народився у дуже важкий час для українців, коли ми ще не
                    мали незалежної держави та були закріпачені указом Катерини
                    ІІ. Але він ніколи не втрачав надії на те, що його земляки
                    об'єднаються та здобудуть свободу. Шевченка прозвали
                    Кобзарем, тобто хранителем народної пам'яті. Тож не дивно,
                    що його боялася Російська імперія, яка намагалася
                    русифікувати всіх українців. У річницю народження Тараса
                    Шевченка і ми розповіли його біографію та назвали кілька
                    цікавих фактів. Біографія Тараса Шевченка Тарас Шевченко
                    народився у селі Моринці Київської області (зараз це
                    Черкаська область) у багатодітній родині кріпаків. У нього
                    було 5 сестер та 2 брати. З раннього віку він виявляв
                    здібності до поезії та малювання. У дяка він навчався
                    грамоти. Коли хлопчикові було 9 років, померла його мати, а
                    батько одружився ще раз. Мачуха жорстоко поводилася з
                    дітьми. Тарасові було лише 11 років, коли він осиротів.
                    Хлопчик наймався на різну важку роботу і шукав собі
                    наставника, щоб вчитися малюванню. Під час пошуків вчителя
                    він їздив різними містами. Зрештою потрапив у наймицтво до
                    російського дворянина Павла Енгельгарда. З 1829 по 1831 роки
                    Тарас та Енгельгард жили у Вільнюсі, де юнак багато малював
                    і майстерно опанував олівець. 1831 року Енгельгард взяв
                    Шевченка із собою до Санкт-Петербурга і віддав на навчання
                    малюванню. У Петербурзі Тарас познайомився з багатьма
                    визначними художниками та колишніми українськими кріпаками,
                    а також написав свої перші літературні твори. 1838 року його
                    друзі художник Карл Брюллов та поет Василь Жуковський
                    викупили Шевченка з кріпацтва. Для цього Брюллов намалював
                    портрет, який розіграли у лотереї. Павлові Енгельгарду
                    виплатили 2500 рублів, і він відпустив Тараса.
                </span>
            </div>
            <div style={{textAlign: "center"}}>
                <button onClick={() => resetImageHandler()} style={buttonStyle}>Reset</button>
                <button onClick={() => increseImageHandler()} style={buttonStyle}>Increse</button>
                <button onClick={() => decreseImageHandler()} style={buttonStyle}>Decrese</button>
                <input id="imageFactor" type="number" min={0} max={100} />
            </div>
        </>
    );
}

export default MainPage;
