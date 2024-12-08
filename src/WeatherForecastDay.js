import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let maxTemperature = Math.round(props.data.temperature.maximum);
        return `${maxTemperature}°`;
    }
    
    function minTemperature() {
        let minTemperature = Math.round(props.data.temperature.minimum);
        return `${minTemperature}°`;
    }

    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
            <div className="ForecastDay">{day()}</div>
                <div className="ForecastIcon">
                    <img src={props.data.condition.icon_url} alt={props.data.condition.description} className="float-left" />
                </div>
                <div className="ForecastTemps">
                    <span className="ForecastTemps-max">{maxTemperature()}</span>
                    <span className="ForecastTemps-min">{minTemperature()}</span>
                </div>
        </div>
    );
}