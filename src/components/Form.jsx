import {API_KEY, baseURL} from "../utils/constants.js";

const Form = ({getWeather}) => {

    const handleGetWeather = e => {
        e.preventDefault(); //  отменяет дефолтное поведение формы
        const city = e.currentTarget.city.value.trim();
        getWeather(city);
    }

    return (
        <form onSubmit={handleGetWeather}>
            <input type={"text"} name={"city"} />
            <button type={"submit"}>Get Weather</button>
        </form>
    );
};

export default Form;