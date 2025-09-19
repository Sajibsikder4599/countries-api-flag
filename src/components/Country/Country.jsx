import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handleButtonVisited = () => {
    // setVisited(true)
    // if(visited){
    //   setVisited(false)
    // }else{
    //   setVisited(true)
    // }
    // setVisited(visited ? false : true)
    setVisited(!visited);
    handleVisitedCountries(country);

  };

  // console.log(country.area.area);
  return (
    <div className={`country ${visited && "visited-country"}`}>
      <h4>Countery name is {country.name.common}</h4>
      <p>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      </p>
      <p> population {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "big area" : "small area"}
      </p>
      <button onClick={handleButtonVisited}>
        {visited ? "visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;