function updateTime() {
  let warsawElement = document.querySelector("#warsaw");
  let warsawDateElement = warsawElement.querySelector(".date");
  let warsawTimeElement = warsawElement.querySelector(".time");

  let warsawTimeZone = moment().tz("Europe/Warsaw");

  warsawDateElement.innerHTML = warsawTimeZone.format("MMMM Do YYYY");
  warsawTimeElement.innerHTML = `${warsawTimeZone.format(
    "h:mm:ss"
  )} <small>${warsawTimeZone.format("A")}</small>`;

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  let tokyoTimeZone = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTimeZone.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTimeZone.format(
    "h:mm:ss"
  )} <small>${tokyoTimeZone.format("A")}</small>`;
}

updateTime();
setInterval(updateTime, 1000);
