import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("fahrenheit");
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if (unit === 'fahrenheit') {
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(props.fahrenheit)}</span>
                <span className="unit">°F | <a href="/" onClick={convertToCelsius}>°C</a></span>
            </div>
        );
    } else {
        let celsius = (props.fahrenheit - 32) * 5/9;
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(celsius)}</span>
                <span className="unit"><a href="/" onClick={convertToFahrenheit}>°F</a> | °C</span>
            </div>
        );
    }
}