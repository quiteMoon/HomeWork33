import axios from "axios";
import { useState } from "react";

function WeatherPage() {
    const [temp, setTemp] = useState(0);

    const city = "Rivne";
    const url = `https://api.weatherapi.com/v1/current.json?key=9c8ba75b0a7544bf87d173654242904&q=${city}`;

    axios(url)
        .then((response) => {
            console.log(response);
            const data = response.data;
            setTemp(data.current.temp_c);
        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <>
            <h1>Weather</h1>
            <h2>{temp}&#8451;</h2>
        </>
    );
}

export default WeatherPage;
