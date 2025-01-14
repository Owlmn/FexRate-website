export async function fetchCurrencyData(base, startDate, endDate) {
    const apiKey = 'IbRxx0S7gABRpnKoiDOX8v9fICcBemXi';
    const url = `https://api.currencybeacon.com/v1/timeseries?api_key=${apiKey}&base=${base}&start_date=${startDate}&end_date=${endDate}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка API: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при запросе данных:', error);
        return null;
    }
}
