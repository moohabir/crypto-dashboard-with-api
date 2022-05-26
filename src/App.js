import CurrencyConverter from "./components/CurrencyConverter";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <div className="App">
      <h1 className="title">Crpto Dashboard App</h1>
      <div className="app-row">
        <CurrencyConverter />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
