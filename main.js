let pdiv = document.createElement("div");
let days = document.createElement("span");
let hours = document.createElement("span");
let mins = document.createElement("span");
let secs = document.createElement("span");
let dtxt = document.createElement("span");
let count = document.getElementById("count");
days.style.cssText = `
font-size:40px;
`;
hours.style.cssText = `
font-size:40px;
`;
mins.style.cssText = `
font-size:40px;
`;
secs.style.cssText = `
font-size:40px;
color:#ee5486;
`;
dtxt.innerHTML = "Days";
let htxt = document.createElement("span");
htxt.innerHTML = "Hours";
let mtxt = document.createElement("span");
mtxt.innerHTML = "Minutes";
let stxt = document.createElement("span");
stxt.innerHTML = "Secounds";

pdiv.style.cssText = `
text-align:center;
font-family:arial;
display:grid;
grid-template-columns:repeat(4,1fr);
color:white;
font-weight:bold;
font-size:20px;
`;

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
  mins.innerHTML = Math.trunc(upminutes);
  secs.innerHTML = Math.trunc(upsec);
  console.log(days, hours, mins, secs);
  pdiv.innerHTML = `
  ${days.outerHTML}
  ${hours.outerHTML}
  ${mins.outerHTML}
  ${secs.outerHTML}
  ${dtxt.outerHTML}
  ${htxt.outerHTML}
  ${mtxt.outerHTML}
  ${stxt.outerHTML}
  `;
  count.innerHTML = pdiv.outerHTML;
}, 1e3);
