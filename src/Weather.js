import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1>Atlanta</h1>
            <ul>
                <li>Saturday 12:30</li>
                <li>Partly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clearfix">
                        <img src="" alt="Partly Cloudy" className="float-left" />
                    <div className="float-left">
                        <span className="temperature">35</span>
                        <span className="unit">℉</span>
                    </div>
                </div>
            </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 15%</li>
                        <li>Humidity: 50%</li>
                        <li>Wind: 34 mph</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}