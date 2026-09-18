import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/navbar'
import Weather from './components/weatherinfo'
import Commoncities from './components/commonplaces';
import { useState } from 'react';


 function App() {
  const [weatherdata,setWeatherdata]=useState(null)
   const apidata = async (itext) => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${itext}&appid=3ef5930c47419103d6bab93bbdfaa0a2&units=metric`
        );
        const data = await response.json();
        console.log(data);
        setWeatherdata(data)
    };



  return (
     <div>
      <Nav getcity={apidata} />
      <Weather weatherdata={weatherdata}/>
      <Commoncities weatherdata={weatherdata}/>
     </div>
  );
}
export default App;