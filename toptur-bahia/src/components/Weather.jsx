import { useState, useEffect } from "react";
import styled from "styled-components";

const WeatherBox = styled.div`
  background: #ffffff;
  padding: 10px;
  border-radius: 15px;
  max-width: 350px;
  max-height: 200px;
  margin: 20px auto;
  text-align: center;
  box-shadow: 0px 5px 18px rgba(0,0,0,0.12);
  border: 1px solid #e6e6e6;
`;

const City = styled.h3`
  margin: 0;
  color: #0077b6;
  font-size: 18px;
`;

const Temp = styled.h1`
  font-size: 40px;
  margin: 5px 0;
  color: #0077b6;
`;

const Desc = styled.p`
  font-size: 18px;
  text-transform: capitalize;
  color: #555;
  margin: 5px 0 10px 0;
`;

const MinMax = styled.p`
  font-size: 12px;
  color: #666;
`;

const WeatherIcon = styled.img`
  width: 50px;
  margin-top: 10px;
`;

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = "b2b2bb500db68bb2f10a9c59dfa6c36a"; 
    const city = "Morro de São Paulo,BR";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setWeather({
          city: "Morro de São Paulo",
          temp: Math.round(data.main.temp),
          tempMin: Math.round(data.main.temp_min),
          tempMax: Math.round(data.main.temp_max),
          desc: data.weather[0].description,
          icon: data.weather[0].icon
        });
      });
  }, []);

  if (!weather) return <WeatherBox>Carregando clima...</WeatherBox>;

  return (
    <WeatherBox>
      <City>{weather.city}</City>
      <WeatherIcon src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="clima"/>
      <Temp>{weather.temp}°C</Temp>
      <Desc>{weather.desc}</Desc>
      <MinMax>🌡️ Mín: {weather.tempMin}° • Máx: {weather.tempMax}°</MinMax>
    </WeatherBox>
  );
}
