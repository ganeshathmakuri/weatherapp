import { useState } from "react";
import { useEffect } from "react";
function Commoncities() {
    const cities = ["Hyderabad", "Delhi", "Mumbai", "Warangal"];
    const [weatherdata2, setWeatherdata2] = useState([]);
    useEffect(()=>{
        const getweather=async ()=>{
            const result=[]
            for(let city of cities){
                const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ef5930c47419103d6bab93bbdfaa0a2&units=metric`)
                const data= await response.json()
                if(response.ok){
                    result.push(data)
                }
            }
            setWeatherdata2(result)

        }
        getweather()
    },[])



    return (

        <div className="commonplaces d-flex flex-column align-items-center gap-3  ">
            <h3 className="text-center">Weather On Some Common Places</h3>
            <table className="citytable  ">
                <thead>
                    <tr>
                        <th>city</th>
                        <th>Feels_like</th>
                        <th>Humidity</th>
                        <th>Temp</th>
                        <th>Max_temp</th>
                        <th>MIn_temp</th>
                        <th>Wind_speed</th>
                    </tr>
                </thead>
                <tbody>
                 {weatherdata2.map((data)=>(
                    <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.main.feels_like}</td>
                        <td>{data.main.humidity}</td>
                        <td>{data.main.feels_like}</td>
                        <td>{data.main.temp}</td>
                        <td>{data.main.temp_max}</td>
                        <td>{data.main.temp_min}</td>
                        <td>{data.wind.speed}</td>



                    </tr>
                 ))}
                </tbody>

            </table>
        </div>

    )
}
export default Commoncities;
