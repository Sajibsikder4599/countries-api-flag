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


const [visitedFlag,setVisitedFlag] = useState([])

const showVisitedCountriesFlag = (flag) =>{
 const newFlag = [...visitedFlag, flag];
 setVisitedFlag(newFlag);
 

}
;
// console.log(AllcountriesData.countries)
  return (
    <div>
      <h3>thsese are all countries and Toatal : {totalCountries.length}</h3>
      <h3>thsese are all new visited : {visitedCountry.length}</h3>

      <div className='visited-flag-container'>
      <h2>Visited countries Flags are below</h2>
      {
        visitedFlag.map(flag=><img src={flag}></img>)

      }

      </div>
      <ol>
        {visitedCountry.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {totalCountries.map((country) => (
          <Country
            country={country}
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
            showVisitedCountriesFlag={showVisitedCountriesFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;