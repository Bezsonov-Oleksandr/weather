const Weather = ({weather, message}) => {
    if (message) {
        return (<div className={'infoWeath'}>{message}</div>);
    } else {
        return (
            <div className={'infoWeath'}>
                {!message &&
                <>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp}C</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {weather.sunset}</p>
                </>
                }
                {message}
            </div>);
    }
};

export default Weather;