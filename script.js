const API_KEY = "YOUR_API_KEY"; // Get a free API key from Alpha Vantage
const STOCK_SYMBOL = "AAPL"; // Example: Apple stock

async function fetchStockData() {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${STOCK_SYMBOL}&interval=5min&apikey=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Extract latest stock price
        const timeSeries = data["Time Series (5min)"];
        const latestTime = Object.keys(timeSeries)[0];
        const latestPrice = timeSeries[latestTime]["1. open"];

        console.log(`Latest price of ${STOCK_SYMBOL}: $${latestPrice}`);
    } catch (error) {
        console.error("Error fetching stock data:", error);
    }
}

fetchStockData();