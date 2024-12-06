"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchWeatherData() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = "https://api.weather.gov/gridpoints/IWX/8,63/forecast/hourly?units=us";
        try {
            const response = yield fetch(apiUrl, {
                headers: { "User-Agent": "My Weather App (example@example.com)" }
            });
            if (!response.ok) {
                throw new Error(`API call failed with status ${response.status}`);
            }
            const data = yield response.json();
            console.log("Full API Response:", data); // Debug log
            // Check the exact path to periods
            const periods = data.properties.periods;
            console.log("Periods:", periods); // Debug log
            if (periods.length === 0) {
                console.error("No periods found in the data");
                return;
            }
            renderTable(periods);
        }
        catch (error) {
            console.error("Error fetching weather data:", error);
        }
    });
}
// Rest of the code remains the same as in the previous artifact
function renderTable(periods) {
    const tableContainer = document.getElementById("weather-table-container");
    if (!tableContainer) {
        console.error("Table container not found!");
        return;
    }
    const table = document.createElement("table");
    table.classList.add("weather-table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const headerRow = document.createElement("tr");
    ["Icon", "Time", "Temperature", "Wind", "Precipitation", "Forecast"].forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    periods.forEach((period, index) => {
        const row = document.createElement("tr");
        row.classList.add(index % 2 === 0 ? 'even-row' : 'odd-row');
        const iconCell = document.createElement("td");
        const iconImg = document.createElement("img");
        iconImg.src = period.icon;
        iconImg.alt = "Weather icon";
        iconImg.style.width = "50px";
        iconImg.style.height = "50px";
        iconCell.appendChild(iconImg);
        row.appendChild(iconCell);
        const timeCell = document.createElement("td");
        const date = new Date(period.startTime);
        const options = {
            weekday: 'long',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        };
        timeCell.textContent = date.toLocaleString('en-US', options)
            .replace(',', ', ')
            .replace(/\s/g, (match, offset) => offset === 2 ? ', ' : match);
        row.appendChild(timeCell);
        const tempCell = document.createElement("td");
        tempCell.textContent = `${period.temperature}°${period.temperatureUnit}`;
        row.appendChild(tempCell);
        const windCell = document.createElement("td");
        windCell.textContent = `${period.windSpeed} ${period.windDirection}`;
        row.appendChild(windCell);
        const precipCell = document.createElement("td");
        precipCell.textContent = period.probabilityOfPrecipitation.value !== null
            ? `${period.probabilityOfPrecipitation.value}%`
            : 'N/A';
        row.appendChild(precipCell);
        const forecastCell = document.createElement("td");
        forecastCell.textContent = period.shortForecast;
        row.appendChild(forecastCell);
        tbody.appendChild(row);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
}
// CSS remains the same as in previous version
const styleElement = document.createElement('style');
styleElement.textContent = `
    .weather-table {
        width: 100%;
        border-collapse: collapse;
    }
    .weather-table th {
        background-color: #f2f2f2;
        border: 1px solid #ddd;
        padding: 8px;
    }
    .weather-table td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }
    .even-row {
        background-color: #f9f9f9;
    }
    .odd-row {
        background-color: #ffffff;
    }
`;
document.head.appendChild(styleElement);
document.addEventListener("DOMContentLoaded", () => {
    fetchWeatherData();
});
