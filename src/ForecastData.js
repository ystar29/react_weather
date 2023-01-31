import React from "react";

//create the react component to show the next 5 days forecast weather info

class ForecastData extends React.Component{

	render(){

		let forecastItems = [];

		if(this.props.data.forecast){
			// map fn to get the days skipping the hours.. openweathermap returns the timestamp in seconds!
			let lastDay = 0;
			let today = new Date();
			this.props.data.forecast.forEach(function(obj, index, arr) {
				let getDate = new Date(obj.dt*1000);
				let currentDay = getDate.getDate();
				if(currentDay !== lastDay && currentDay !== today.getDate()){ //offset to discart current day
					lastDay = currentDay;
					let currentObj = arr[index];
					let currentIcon = `http://openweathermap.org/img/w/${currentObj.weather[0].icon}.png`;
					forecastItems.push(
						<div key={index} className="forecast-item col-12">
							<div className="forecast-item-date">{getDate.getMonth()+1}/{currentDay}</div>
							<div className="forecast-item-icon"><img src={currentIcon} alt="Condition" /></div>
							<div className="forecast-item-max-min">
								<div className="forecast-item-max">Max {currentObj.main.temp_max.toFixed(0)}°C</div>
								<div className="forecast-item-min">Min {currentObj.main.temp_min.toFixed(0)}°C</div>
							</div>
						</div>
					)
				}
			})
		}

		return(
			<div className="forecast-info">
				{forecastItems}
			</div>
		)
    }
}

export default ForecastData;