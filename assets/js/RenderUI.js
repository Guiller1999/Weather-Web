class RenderUI {
    constructor(data) {
        this.data = data;
        this.temperature = document.getElementById('temperature');
        this.location = document.getElementById('location');
        this.icon = document.getElementById('img-temperature');
        this.description = document.getElementById('description');
        this.cloud = document.getElementById('cloud');
        this.wind = document.getElementById('wind');
        this.humidity = document.getElementById('humidity');
    }

    // Método que convierte de grados Farenheit a Celsisus
    kelvinToCelsius(temp) {
        console.log(temp);
        let tempKelvin = parseFloat(temp);
        let tempCelsius = Math.round(tempKelvin - 273.15);

        return tempCelsius;
    }

    // Método en el cual se imprime la información extraida de la API en cada componente de la web
    render() {
        let tempCelsius = this.kelvinToCelsius(this.data['main']['temp'] + '°F')
        this.temperature.textContent = tempCelsius + ' °C';
        this.location.textContent = this.data['name'] + '/' + this.data['sys']['country'];
        this.icon.src = `http://openweathermap.org/img/wn/${this.data['weather'][0]['icon']}@2x.png`;
        this.description.textContent = this.data['weather'][0]['main'] + ' - ' + this.data['weather'][0]['description'];
        this.cloud.textContent = this.data['clouds']['all'] + '%';
        this.wind.textContent = this.data['wind']['speed'] + ' meter/sec';
        this.humidity.textContent = this.data['main']['humidity'] + '%';
    }
}