let count = document.getElementById("count");
let days = document.querySelector(".count span:first-child");
let hours = document.querySelector(".count span:nth-child(2)");
let Minutes = document.querySelector(".count span:nth-child(3)");
let secs = document.querySelector(".count span:nth-child(4)");

setInterval(() => {
  let current = new Date();
  let future = new Date("1 21 2024");
  let diff = (future - current) / 1e3 / 60 / 60 / 24;
  let updays = Math.floor(diff);
  let uphours = (diff - updays) * 24;
  let upminutes = (uphours - Math.floor(uphours)) * 60;
  let upsec = (upminutes - Math.floor(upminutes)) * 60;
  uphours = Math.trunc(uphours);
  upminutes = Math.trunc(upminutes);
  upsec = Math.trunc(upsec);
  if (updays < 10) {
    updays = `0${updays}`;
  }
  if (uphours < 10) {
    uphours = `0${uphours}`;
  }
  if (upminutes < 10) {
    upminutes = `0${upminutes}`;
  }
  if (upsec < 10) {
    upsec = `0${upsec}`;
  }
  // days.innerHTML = updays;
  // hours.innerHTML = uphours;
  // Minutes.innerHTML = upminutes;
  // secs.innerHTML = upsec;
  let d1 = document.createElement("img");
  updays = updays.toString();
  let fd1 = updays[0];
  d1.setAttribute("src", `images/lscale_${fd1}.png`);
  let dfd = document.querySelector(".dfd");
  dfd.innerHTML = d1.outerHTML;

  let d2 = document.createElement("img");
  let fd2 = updays[1];
  d2.setAttribute("src", `images/lscale_${fd2}.png`);
  let dsd = document.querySelector(".dsd");
  dsd.innerHTML = d2.outerHTML;

  let h1 = document.createElement("img");
  uphours = uphours.toString();
  let fh1 = uphours[0];
  h1.setAttribute("src", `images/lscale_${fh1}.png`);
  let hfd = document.querySelector(".hfd");
  hfd.innerHTML = h1.outerHTML;

  let h2 = document.createElement("img");
  let fh2 = uphours[1];
  h2.setAttribute("src", `images/lscale_${fh2}.png`);
  let hsd = document.querySelector(".hsd");
  hsd.innerHTML = h2.outerHTML;

  let m1 = document.createElement("img");
  upminutes = upminutes.toString();
  let fm1 = upminutes[0];
  m1.setAttribute("src", `images/lscale_${fm1}.png`);
  let mfd = document.querySelector(".mfd");
  mfd.innerHTML = m1.outerHTML;

  let m2 = document.createElement("img");
  let fm2 = upminutes[1];
  m2.setAttribute("src", `images/lscale_${fm2}.png`);
  let msd = document.querySelector(".msd");
  msd.innerHTML = m2.outerHTML;

  let s1 = document.createElement("img");
  upsec = upsec.toString();
  let fs1 = upsec[0];
  s1.setAttribute("src", `images/rscale_${fs1}.png`);
  let sfd = document.querySelector(".sfd");
  sfd.innerHTML = s1.outerHTML;

  let s2 = document.createElement("img");
  let fs2 = upsec[1];
  s2.setAttribute("src", `images/rscale_${fs2}.png`);
  let ssd = document.querySelector(".ssd");
  ssd.innerHTML = s2.outerHTML;

  console.log();
}, 1e3);
