import React from "react";

//react component to provide a form to search for a new desired city

class Search extends React.Component{

    render(){

        return(
                <form onSubmit = {this.props.loadWeatherData}>
	                <div className="input-group mb-3">
	                  <input type="text" className="form-control" placeholder="Type a city..." aria-label="Type a city..."name="city" />
	                  <input type="text" className="form-control" placeholder="... and the country" aria-label="... and the country" name="country" />
	                  <div className="input-group-append">
	                    <button className="btn btn-info" type="submit">Get info</button>
	                  </div>
	                </div>
                </form>
        )
    }
}

export default Search;