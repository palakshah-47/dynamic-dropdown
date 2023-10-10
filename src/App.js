import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [cities, setCities] = useState([]);
  const [selectedCounty, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // const countries = {
  //   France: ["Paris", "Marseille", "Lille", "Lyon"],
  //   Usa: ["New York", "San Francisco", "Austin", "Dallas"],
  //   Brazil: ["São Paulo", "Rio de Janeiro", "Salvador"]
  // };

  const countries = [
    {
      name: "France",
      code: "FR",
      cities: ["Paris", "Marseille", "Lille", "Lyon"]
    },
    {
      name: "Usa",
      code: "US",
      cities: ["New York", "San Francisco", "Austin", "Dallas"]
    },
    {
      name: "Brazil",
      code: "BR",
      cities: ["São Paulo", "Rio de Janeiro", "Salvador"]
    }
  ];

  // const countryList = countries.map(name => ({
  //   name: name
  // }));

  function handleCountrySelect(e) {
    console.log("Selected country", e.target.value);
    const countrySel = e.target.value;
    console.log(countrySel);
    const fileteredVal = countries?.filter((ctr) => ctr.name === countrySel);
    console.log(fileteredVal);
    const citiesSel = fileteredVal?.length ? fileteredVal[0]?.cities : [];

    setSelectedCountry(countrySel);
    setCities(citiesSel);
    setSelectedCity("");
  }

  function handleCitySelect(e) {
    console.log("Selected city", e.target.value);
    const citiesSel = e.target.value;
    setSelectedCity(citiesSel);
  }

  return (
    <div className="App">
      <h1>Example DropDown Coutries and Cities</h1>

      <div className="Container">
        <select
          name="Countries"
          onChange={(e) => handleCountrySelect(e)}
          value={selectedCounty}
        >
          <option value="">Select the country</option>
          {countries.map((country, index) => (
            <option key={`${index}-${country.name}`} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        <select
          name="Cities"
          onChange={(e) => handleCitySelect(e)}
          value={selectedCity}
        >
          <option value="">Select the city</option>
          {cities.map((city, key) => (
            <option key={key} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
