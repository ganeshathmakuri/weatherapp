function Weather(props){
    return(
         <div className="cityinfo ">
        <h3 className="text-center my-4">Weather for <span id="place">City</span></h3>
        <div className="d-flex justify-content-evenly m-3">
            <div className="temperature box p-4 ">
                <h3 className="text-center">Temperature</h3>
                <hr/>
                <div className=" d-flex flex-column ">
                    <h5>Temp : {props.weatherdata?.main?.temp} &deg; C</h5>
                    <h5>Max_temp : {props.weatherdata?.main?.temp_max} &deg; C</h5>
                    <h5>Min_temp : {props.weatherdata?.main?.temp_min} &deg; C</h5>
                </div>
            </div>
            <div className="humidity box p-4">
                <h3 className="text-center">Humidity</h3>
                <hr/>
                <div className=" d-flex flex-column ">
                    <h5>Humidity : {props.weatherdata?.main?.humidity}</h5>
                    <h5> Pressure : {props.weatherdata?.main?.pressure}</h5>
                    <h5>Feels_like: {props.weatherdata?.main?.feels_like}</h5>
                </div>
            </div>
            <div className="windinfo box p-4">
                <h3 className="text-center">Wind</h3>
                <hr/>
                <div className=" d-flex flex-column ">
                    <h5>Speed : {props.weatherdata?.wind?.speed} </h5>
                    <h5> Degree : {props.weatherdata?.wind?.deg}</h5>
                    <h5>Gust : {props.weatherdata?.wind?.gust}</h5>
                </div>
            </div>
        </div>
    </div>

    )
}
export default Weather; 