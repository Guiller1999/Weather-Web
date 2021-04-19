const form = document.getElementById('form');
const city = 'Guayaquil';
const weatherCity = new Weather(city);
const containerWeather = document.getElementById('container-weather');
const button = document.getElementById('btn-send');

// Función que llama a los métodos de la calse Weather y RenderUI necesarios para extraer e imprimir la 
// información de la API en los componenetes de la web 
const fetchWeather = async () => {
    const response = await weatherCity.getWeather();
    const renderUI = new RenderUI(response);
    renderUI.render();
}

// Función que valida que el usuario ingrese solo texto
const validateCity = (nameCity) => {
    const valoresAceptados = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

    if(valoresAceptados.test(nameCity)) return true;
    else return false;
}


button.addEventListener('click', async (e) => {
    const txtCity = document.getElementById('city').value.trim();

    if(txtCity.length > 0 && validateCity(txtCity)) {
        try {
            const response = await weatherCity.changeLocation(txtCity); // Se extrae los datos del clima de la  ciudad pasada por parámetro. Se recibe la información en formato JSON
            const renderUI = new RenderUI(response);
            renderUI.render(); // Se llama al método encargado de extraer la información que se necesita del objeto json e imprime esa información en los elementos correspondientes
        }
        catch (e) {
            alert('ERROR: NOMBRE DE CIUDAD INVÁLIDO'); // Este mensaje se lanza cuando la ciudad ingresada no está dentro de la API
        }
        
    }
    else {
        alert('ERROR: INGRESE UN NOMBRE DE CIUDAD'); // Se lanaza el error cuando no se ingresa nada en el campo de texto
    }
    document.getElementById('city').value = '';
    e.preventDefault();
});

window.onload = () => {
    fetchWeather();
    document.getElementById('city').value = '';
}
