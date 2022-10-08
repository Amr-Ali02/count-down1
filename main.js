let count = document.getElementById("count");
let days = document.querySelector(".count span:first-child")
let hours = document.querySelector(".count span:nth-child(2)")
let Minutes = document.querySelector(".count span:nth-child(3)")
let secs = document.querySelector(".count span:nth-child(4)")

setInterval(() => {
  let current = new Date();
  let future = new Date("11 4 2022");
  let diff = (future - current) / 1e3 / 60 / 60 / 24;
  let updays = Math.floor(diff);
  let uphours = (diff - updays) * 24;
  let upminutes = (uphours - Math.floor(uphours)) * 60;
  let upsec = (upminutes - Math.floor(upminutes)) * 60;
  days.innerHTML = updays;
  hours.innerHTML = Math.trunc(uphours);
  Minutes.innerHTML = Math.trunc(upminutes);
  secs.innerHTML = Math.trunc(upsec);
}, 1e3);
