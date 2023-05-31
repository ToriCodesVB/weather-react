import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }


  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = "Amsterdam";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather mb-2">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="Submit"
              className="btn btn-light w-100"
              value="Search"
            />
          </div>
        </div>
      </form>
      <h1>Amsterdam</h1>
      <ul className="mt-3">
        <li>Tuesday 01:31</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
            alt="Mostly cloudy"
          />
          <span className="temperature">10</span>
          <span className="unit">°С</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 83%</li>
            <li>Wind: 19 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
