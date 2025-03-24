import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useState} from "react";
import {API_KEY, baseURL} from "../utils/constants.js";

const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [message, setMessage] = useState('Enter city name');
    const getWeather = async (city) => {
        try {
            const response = await fetch(`${baseURL}?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            setWeatherInfo({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString()
            });
            setMessage('')
        } catch (e) {
            console.log(e);
            setMessage('Enter valid city name')
        }
    };

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather weather={weatherInfo} message={message}/>
        </div>
    );
};

export default Data;