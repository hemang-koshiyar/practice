import React, { useEffect, useState } from "react";

const CovidData = () => {
  const [covidData, setCovidData] = useState([]);
  const [country, setCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({});
  const [flag, setFlag] = useState(
    "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id1138179183?k=20&m=1138179183&s=612x612&w=0&h=iJ9y-snV_RmXArY4bA-S4QSab0gxfAMXmXwn5Edko1M="
  );
  const fetchData = () => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => setCovidData(data));
  };
  useEffect(() => fetchData(), []);

  const fetchSpecificCountry = () => {
    fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedCountry(data);
        setFlag(data.countryInfo.flag);
      });
  };
  useEffect(() => fetchSpecificCountry(), [country]);

  return (
    <div className="container m-auto">
      <h2> Select Country : </h2>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {country || "Select Country"}
        </button>

        <ul className="dropdown-menu h-50 overflow-scroll">
          {covidData &&
            covidData.map((dt) => {
              return (
                <li
                  className="dropdown-item "
                  onClick={() => {
                    setCountry(dt.country);
                  }}
                >
                  {dt.country}
                </li>
              );
            })}
        </ul>

        <div className="card w-100 " style={{ width: "18rem" }}>
          <img
            src={flag}
            className="card-img-top"
            alt="..."
            width={500}
            height={700}
          />
          <div className="card-body">
            <h5 className="card-title">{country}</h5>
            <p className="card-text">
              <p>Active : {selectedCountry.active || 0}</p>
              <p>Cases : {selectedCountry.cases || 0}</p>
              <p>Critical : {selectedCountry.critical || 0}</p>
              <p>Deaths : {selectedCountry.deaths || 0}</p>
              <p>Population : {selectedCountry.population || 0}</p>
              <p>Recovered : {selectedCountry.recovered || 0}</p>
              <p>Tests : {selectedCountry.tests || 0}</p>
              <p>Today Cases : {selectedCountry.todayCases || 0}</p>
              <p>Today Recovered : {selectedCountry.todayRecovered || 0}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidData;
