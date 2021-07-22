import React from 'react';
import style from './Countries.module.scss';
import cities from './Data/cities.json';

let sortedCities = cities;
let keysSorted = Object.keys(sortedCities).sort(function (a, b) {
  return sortedCities[a] - sortedCities[b];
});
console.log(keysSorted);

const CountriesList = () => {
  return (
    <div>
      <div className={style.Countries}>
        <span className={style.Country}>Ваш город</span>
        <select className={style.Cities} name="cities" id="cities">
          {cities.map((post) => (
            <option key={post.city} value={post.population}>
              {post.city}
            </option>
          ))}
        </select>
      </div>
      <div className={style.Line}></div>
    </div>
  );
};

export default CountriesList;
