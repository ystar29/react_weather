import React from "react";
import hmdticon from './humidity.svg';
import cloudicon from './clouds.svg';
import windicon from './wind.svg';

//create the react component to show the current weather info
//some verifications to onyl show info if data is returned

class WeatherData extends React.Component{
    render(){
    	let icon = `http://openweathermap.org/img/w/${this.props.data.icon}.png`;
        return(
            <div className="weather-info">
	            { this.props.data.country && this.props.data.city && <p className="weather-info-location">{this.props.data.city}, {this.props.data.country}</p> }	               
	            <div className="clearfix"></div>
	            <div className="row weather-now-info-row">
	                <div className="col-12 col-sm-3">
		                {
		                    this.props.data.description && <div className="weather-info-cond">
		                    	<img src={icon} alt="Condition" />
		                        <span>{this.props.data.description}</span>
		                    </div>
		                }
	                </div>

	                <div className="col-12 col-sm-5">
		                { this.props.data.temperature && <div className="weather-info-temp">{this.props.data.temperature}<span>°C</span></div> }
	                </div>

	            	<div className="col-12 col-sm-4">
		                { 
		                	this.props.data.humidity && <p className="weather-mini-info">
		                		<picture><img src={hmdticon} alt="Humidity" /></picture>
		                		<span>Humidity {this.props.data.humidity}%</span>
		                    </p>
		                }
	            		{ 
	            			this.props.data.wind && <p className="weather-mini-info">
	            				<picture><img src={windicon} alt="wind" /></picture>
	            				<span>Wind {this.props.data.wind} m/s</span>
	            		    </p>
	            		}
	            		{ 
	            			this.props.data.clouds && <p className="weather-mini-info">
	            				<picture><img src={cloudicon} alt="clouds" /></picture>
	            				<span>Cloudiness {this.props.data.clouds}%</span>
	            		    </p>
	            		}
	            	</div>
	            </div>
	            <div className="clearfix"></div>
            </div>
        )
    }
}

export default WeatherData;