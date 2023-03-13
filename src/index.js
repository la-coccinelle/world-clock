function updateTime() {
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");

    let tokyoTimeZone = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTimeZone.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let warsawElement = document.querySelector("#warsaw");
  if (warsawElement) {
    let warsawDateElement = warsawElement.querySelector(".date");
    let warsawTimeElement = warsawElement.querySelector(".time");

    let warsawTimeZone = moment().tz("Europe/Warsaw");

    warsawDateElement.innerHTML = warsawTimeZone.format("MMMM Do YYYY");
    warsawTimeElement.innerHTML = warsawTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDateElement = chicagoElement.querySelector(".date");
    let chicagoTimeElement = chicagoElement.querySelector(".time");

    let chicagoTimeZone = moment().tz("America/Chicago");

    chicagoDateElement.innerHTML = chicagoTimeZone.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = chicagoTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let citySelectedTimeZone = event.target.value;
  if (citySelectedTimeZone === "current") {
    citySelectedTimeZone = moment.tz.guess();
  }

  let cityTime = moment().tz(citySelectedTimeZone);
  let cityName = citySelectedTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `       
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <a href="/">Go to Homepage</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");

citySelectElement.addEventListener("change", updateCity);
