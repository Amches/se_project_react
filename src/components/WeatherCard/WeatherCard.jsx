import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

export default function WeatherCard({ weatherData }) {
  const { CurrentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(weatherData);

  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
    <section className="weather-card">
      <p className="weatger-card__temp">
        {weatherData.temp[CurrentTemperatureUnit]}&deg;
        {CurrentTemperatureUnit}
      </p>
      <img
        src={weatherOption?.url}
        alt={`Card showing ${weatherOptions?.day ? "day" : "night"} time ${
          weatherOptions?.condition
        } weather`}
        className="weather-card__image"
      />
    </section>
  );
}
