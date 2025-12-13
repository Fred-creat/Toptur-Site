import { useState, useEffect } from "react";
import styled from "styled-components";

const WeatherBox = styled.div`
  background: transparent;
  padding: 15px;
  border-radius: 15px;
  max-width: 350px;
  max-height: 150px;
  margin: 30px auto;
  margin-left: 5px;
  margin-top: -500px;
  text-align: center;
  position: absolute;

  /* RESPONSIVIDADE */
  @media (max-width: 1024px) {
    margin-top: -420px;
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    margin-top: -450px;
    transform: scale(0.9);
  }

  @media (max-width: 600px) {
    margin-top: -720px;
    left: 81%;
    transform: translateX(-50%) scale(0.9);
  }

  @media (max-width: 480px) {
    margin-top: -480px;
    max-width: 260px;
    transform: translateX(-50%) scale(0.85);
  }

  @media (max-width: 380px) {
    margin-top: -430px;
    max-width: 240px;
   
    transform: translateX(-50%) scale(0.8);
  }
`;

const City = styled.h3`
  margin: 0;
  margin-top: -10px;
  color: #edf4f8;
  font-size: 18px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Temp = styled.h1`
  font-size: 40px;
  margin: 5px 0;
  color: #edf4f8;
  margin-top: -10px;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-transform: capitalize;
  color: #edf4f8;
  margin: 5px 0 10px 0;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const MinMax = styled.p`
  font-size: 12px;
  color: #edf4f8;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const WeatherIcon = styled.img`
  width: 50px;
  margin-top: 2px;

  @media (max-width: 480px) {
    width: 40px;
    margin-left: 50px;
    margin-top: -40px;
  }
`;

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
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
      })
      .catch(err => console.error("Erro ao buscar clima:", err));
  }, []);

  if (!weather) return <WeatherBox>Carregando clima...</WeatherBox>;

  return (
    <WeatherBox>
      <City>{weather.city}</City>
      <WeatherIcon
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt="clima"
      />
      <Temp>{weather.temp}°C</Temp>
      <Desc>{weather.desc}</Desc>
      <MinMax>
        🌡️ Mín: {weather.tempMin}° • Máx: {weather.tempMax}°
      </MinMax>
    </WeatherBox>
  );
}
