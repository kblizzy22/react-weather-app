import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            date: new Date(response.data.time *1000),
            wind: response.data.wind.speed,
            description: response.data.condition.description,
            iconUrl: "",
            city: response.data.city
        });
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li><FormattedDate date={weatherData.date} /></li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                            <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left" />
                        <div className="float-left">
                            <span className="temperature">{Math.round(weatherData.temperature)}</span>
                            <span className="unit">℉</span>
                        </div>
                    </div>
                </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind} mph</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey ="91o0f2f84c841e4a7c38t44e6d3be32a";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}