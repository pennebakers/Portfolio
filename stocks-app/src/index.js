import React from 'react';
import ReactDOM from 'react-dom';


{/*function App() {
  const [stocks, setStocks] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      'https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_109f858b9aa240daa87601cfb4a8d8f4 '
    );
    
    setStocks(response.data);
    console.log(response.data);
  };

  return (
    <div className="App">
      <h1>Game of Stocks</h1>
      <h2>Fetch a Stock from an API and display it</h2>

      <div>
        <form>
          <input type="text"/>
          <input type="submit"/>
        </form>
      </div>

      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>


      <div className="stocks">
        <h3>Stock Symbol: {stocks.symbol}</h3>
        <h3>Company Name: {stocks.companyName}</h3>
        <h3>Primary Exchange: {stocks.primaryExchange}</h3>
        <h3>Open: {stocks.open}</h3>
        <h3>Close: {stocks.close}</h3>
      </div>


    </div>
  );
}


*/}


const App = () => {
  return (
    <SearchBar />
  )
}

const SearchBar = () =>{
  return(
  <input type="text">Hello</input>
  )
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
