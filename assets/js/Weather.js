class Weather {
    constructor(city) {
        this.city = city;
        this.key = '350d6fcc979f2dd7197309e7f7e71e71';
        this.lang = 'es';
    }

    // Método que obtiene los datos del clima de una ciudad especifica
    async getWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}&lang=${this.lang}`;
        const cityWeather =  await fetch(url);
        const data = await cityWeather.json();
        return data;
    }

    // Método que obtiene los datos del clima de una ciudad pasada por parámetro
    async changeLocation(city) {
        this.city = city;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}&lang=${this.lang}`;
        const cityWeather =  await fetch(url);
        const data = await cityWeather.json();
        return data;
    } 
}