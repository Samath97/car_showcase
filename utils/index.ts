export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'c00f43fe18msh97e6cc017dada4ep182c0cjsn87598f0dbd8e',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}