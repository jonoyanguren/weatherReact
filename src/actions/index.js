import axios from 'axios';

const API_KEY = '1fea7bb734ba36400c5b8f22710e0d80';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},es`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}