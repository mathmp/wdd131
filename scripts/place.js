document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind chill calculation
const temp = 20; // Temperature in °C
const windSpeed = 5; // Wind speed in km/h

function calculateWindChill(temp, windSpeed) {
    return (temp <= 10 && windSpeed > 4.8) 
        ? 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
        : "N/A";
}

document.getElementById("windchill").textContent = calculateWindChill(temp, windSpeed);
