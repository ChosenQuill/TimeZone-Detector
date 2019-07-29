
let utc = -(new Date().getTimezoneOffset() / 60);
let name = Intl.DateTimeFormat().resolvedOptions().timeZone;
let short = new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];

document.getElementById("timezone").textContent = name;
document.getElementById("short").textContent = short;
if(window.location.hash.substr(1).toLowerCase() === "cst") {
    let cst = utc + 6;
    document.getElementById("bottom").textContent += "CST" + (cst < 0 ? "" : "+") + cst.toString() + " (" + Math.abs(cst) + " Hour" + (Math.abs(cst) === 1 ? "" : "s") + " " + (cst > 0 ? "Ahead" : "Behind") + ")";
} else {
    document.getElementById("bottom").textContent = "UTC" + (utc < 0 ? "" : "+") + utc.toString() + " (" + Math.abs(utc) + " Hour" + (Math.abs(utc) === 1 ? "" : "s")+ " " + (utc > 0 ? "Ahead" : "Behind") + ")";
}