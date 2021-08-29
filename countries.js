
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countries => {
    // console.log(country);
    const countriesDiv = document.getElementById('countries')
    countries.forEach (country => {
        //console.log(country)//
        const div = document.createElement('div') 
        div.classList.add('country') 
        div.innerHTML= `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')">Detail</button> 
        `
        countriesDiv.appendChild(div)
    });
}

 const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));
 }

const displayCountryDetail = country => {
   console.log(country) ;
   const detailDiv = document.getElementById('country-detail');
   detailDiv.innerHTML= `
      <h4>${country.name}</h4>
      <h5>${country.capital}</h5>
      <p>${country.population}</p>
      <img width="200px" src="${country.flag}">
   `
}

