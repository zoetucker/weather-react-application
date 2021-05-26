import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherDetails = {
    city: "Arlington",
    temperature: 75,
    description: "Heavy rain with thunderstorm",
    humidity: 80,
    wind: 3,
  };

  return (
    <div className="Weather">
      <div className="weather-wrapper">
        <div className="row">
          <div className="col">
            <div className="date-time">
              <h5>May 2020</h5>
              <h5 className="current-time">Tuesday 11:15</h5>
            </div>
          </div>
          <div className="col">
            <div className="search-box">
              <input
                className="enter-city"
                type="text"
                placeholder="Enter a city"
                autocomplete="off"
              />
              <input type="submit" className="btn btn-success" value="Go!" />
              <input
                type="submit"
                className="btn btn-success"
                value="📍 Current location"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="current-city-box">
              <h1 className="current-city">{weatherDetails.city}</h1>
              <ul>
                <li className="current-temp-icon">
                  <i className="fas fa-cloud-showers-heavy"></i>
                </li>
                <li className="current-temp">{weatherDetails.temperature}</li>
                <li className="temp-units">
                  <a className="fahrenheit-unit" href="/">
                    °F
                  </a>{" "}
                  |
                  <a className="celsius-unit" href="/">
                    °C
                  </a>
                </li>
              </ul>
            </div>

            <div className="today-details">
              <p className="current-condition">{weatherDetails.description}</p>
              <p className="current-humidity">
                <i className="fas fa-rainbow"></i> Humidity:{" "}
                {weatherDetails.humidity}%
              </p>
              <p className="wind-speed">
                <i className="fas fa-wind"></i> Wind: {weatherDetails.wind} mph
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="date-forecast">
              <h5 id="daily-forcast">Wed</h5>
              <p>
                <i className="fas fa-cloud-sun forecast-icon"></i>
              </p>
            </div>
            <div className="forecast-temp">
              <span className="forecast-temp-max">60°</span>
              <span className="forecast-temp-min">40°</span>
            </div>
          </div>

          <div className="col">
            <div className="date-forecast">
              <h5 id="daily-forcast">Thurs</h5>
              <p>
                <i className="fas fa-cloud-sun forecast-icon"></i>
              </p>
            </div>
            <div className="forecast-temp">
              <span className="forecast-temp-max">60°</span>
              <span className="forecast-temp-min">41°</span>
            </div>
          </div>

          <div className="col">
            <div className="date-forecast">
              <h5 id="daily-forcast">Fri</h5>
              <p>
                <i className="fas fa-cloud-sun forecast-icon"></i>
              </p>
            </div>
            <div className="forecast-temp">
              <span className="forecast-temp-max">59°</span>
              <span className="forecast-temp-min">39°</span>
            </div>
          </div>

          <div className="col">
            <div className="date-forecast">
              <h5 id="daily-forcast">Sat</h5>
              <p>
                <i className="fas fa-cloud forecast-icon"></i>
              </p>
            </div>
            <div className="forecast-temp">
              <span className="forecast-temp-max">59°</span>
              <span className="forecast-temp-min">40°</span>
            </div>
          </div>

          <div className="col">
            <div className="date-forecast">
              <h5 id="daily-forcast">Sun</h5>
              <p>
                <i className="fas fa-cloud-sun forecast-icon"></i>
              </p>
            </div>
            <div className="forecast-temp">
              <span className="forecast-temp-max">60°</span>
              <span className="forecast-temp-min">41°</span>
            </div>
          </div>

          <div className="col">
            <div className="date-forecast">
              <h5 id="daily-forcast">Mon</h5>
              <p>
                <i className="fas fa-cloud-sun forecast-icon"></i>
              </p>
            </div>
            <div className="forecast-temp">
              <span className="forecast-temp-max">60°</span>
              <span className="forecast-temp-min">41°</span>
            </div>
          </div>

          <div className="col">
            <div className="date-forecast">
              <h5 id="daily-forcast">Tues</h5>
              <p>
                <i className="fas fa-cloud-sun forecast-icon"></i>
              </p>
            </div>
            <div className="forecast-temp">
              <span className="forecast-temp-max">60°</span>
              <span className="forecast-temp-min">40°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
