import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import WeatherData from './WeatherData'
import ForecastData from './ForecastData'
import Search from './Search'
import loadinggif from './loading.gif'

const owmKey = 'd8bd15b5ef51fb22d4daf4ed5895f9a3'; //key created to leonardo.neris@live.com

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// create the main component to handle the state, props, API call and so on

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind: undefined,
    clouds: undefined,
    description: undefined,
    error: undefined,
    icon: undefined,
    loading: false
  }

  getWeather = async (e) => {

    //a default city is set to provide weather info at the first access on the app

    let city = "Vancouver";
    let country = "Canada";

    if(e!==undefined){
      e.preventDefault();
      city = e.target.elements.city.value;
      country = e.target.elements.country.value;
    }

    this.setState({ loading: true })

    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${owmKey}&units=metric&lang=en`)
      .then(result => this.setState({
        temperature: result.data.list[0].main.temp.toFixed(0), //fix the value to non decimal steps
        city: result.data.city.name,
        country: result.data.city.country,
        humidity: result.data.list[0].main.humidity,
        wind: result.data.list[0].wind.speed.toFixed(1),
        clouds: result.data.list[0].clouds.all==0?"0":result.data.list[0].clouds.all,
        description: capitalizeFirstLetter(result.data.list[0].weather[0].description),
        icon: result.data.list[0].weather[0].icon,
        forecast: result.data.list,
        error: false
      }))
      .catch(error => this.setState({
        error: "Ops! The weather data cannot be reached... Did you provide the correct location?"
      }))
      .then(always => this.setState({ loading: false }) );
  }

  //first run fn call to provide initial weather data

  componentDidMount() {
    this.getWeather()
  }

  render() {
    return (
      <div className="leo-weather-app">
        <div className="app-bg"></div>
        <div className="card app-card">
          {
              this.state.loading && (
                  <div className="data-loading"><img src={loadinggif}  alt="loading" /></div>
              )
          }
          <div className="card-body">
            <WeatherData data={this.state} />
            <ForecastData data={this.state} />
            {
              this.state.error && (
                  <div className="alert alert-danger" role="alert">
                    {this.state.error}
                  </div>
                )
            }
            <Search loadWeatherData={this.getWeather} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;