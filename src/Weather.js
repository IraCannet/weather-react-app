import React from "react";
import axios from 'axios';
 import Loader from 'react-loader-spinner';

export default function Weather(props){
function handleResponse(response){
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`)
}
    let apiKey = "c4ec87540b7d8d71553d9dad178f26b1";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return(
        <Loader
         type="Puff"
         color="#ffc7c7"
         height={100}
         width={100}
         timeout={4000} //3 secs
 
      />
    )
}