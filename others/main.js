const loadCountryAPI = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countriesHTML = countries.map((country) => getCountry(country));
  const container = document.getElementById("countries");
  container.innerHTML = countriesHTML.join(" ");
};
const getCountry = (country) => {
  console.log(country);
  return `
        <div class="country-div">
        <img src="${country.flags.png}">
        <h4>${country.name.common}</h4>
        <p><strong>Population:</strong> ${country.population}</p>
        <p><strong>Regoin:</strong> ${country.region}</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
        </div>
    `;
};
loadCountryAPI();

//filtering country
const countriesElem = document.querySelector(".countries");
const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");

dropDown.addEventListener("click", () => {
  dropElem.classList.toggle("showDropDown");
  console.log("Droped down");
});

const regions = document.querySelector(".drop");
regions.addEventListener("click", function (event) {
  if (event.target.tagName === "P") {
    const selectedRegion = event.target.textContent.toLowerCase();
    const countryCards = document.querySelectorAll(".country-div");

    countryCards.forEach((card) => {
      const countryRegion = card
        .querySelector("p:nth-of-type(2)")
        .textContent.toLowerCase();
      if (
        selectedRegion === "all regions" ||
        countryRegion.includes(selectedRegion)
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});

//search for country
const searchInput = document.getElementById("searchBTN");
const clickForSearch = document.getElementById("searchClick");

clickForSearch.addEventListener("click", function () {
  const searchValue = searchInput.value.toLowerCase();
  const countryDiv = document.querySelectorAll(".country-div");

  countryDiv.forEach((card) => {
    const countryName = card.querySelector("h4").textContent.toLowerCase();
    if (countryName.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const searchValue = searchInput.value.toLowerCase();
    const countryDiv = document.querySelectorAll(".country-div");

    countryDiv.forEach((card) => {
      const countryName = card.querySelector("h4").textContent.toLowerCase();
      if (countryName.includes(searchValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});

const toggleButton = document.querySelector(".toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
