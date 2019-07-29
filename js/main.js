let utc = -(new Date().getTimezoneOffset() / 60);
let name = Intl.DateTimeFormat().resolvedOptions().timeZone;
let short = new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];


document.getElementById("timezone").textContent = name;
document.getElementById("short").textContent = short;
document.getElementById("utc").textContent = (utc<0?"":"+") + utc.toString();