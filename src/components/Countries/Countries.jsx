import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({fetchCountries}) => {

  const [visitedCountry,setVisitedCountey] = useState([])
const AllcountriesData = use(fetchCountries);
const totalCountries = AllcountriesData.countries;


const handleVisitedCountries = (country) => {
  const newVisitedCountries = [...visitedCountry,country]
  setVisitedCountey(newVisitedCountries);
  
};

// console.log(AllcountriesData.countries)
  return (
    <div>
      <h3>thsese are all countries and Toatal : {totalCountries.length}</h3>
      <h3>thsese are all new visited : {visitedCountry.length}</h3>
      <ol>
        {visitedCountry.map((country,index) => (
          <li>{country.name.common}</li>
         
        ))}
      </ol>
      <div className="countries">
        {totalCountries.map((country) => (
          <Country
            country={country}
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;