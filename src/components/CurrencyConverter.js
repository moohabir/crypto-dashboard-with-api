import React, { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

function CurrencyConverter() {
  const currencies = ["BTC", "USD", "ETH", "LTC", "ADA", "XRP"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondarry] = useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency
      },
      headers: {
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        "X-RapidAPI-Key": "bc8006d48amsh69e5064484e98b7p16d73bjsn37edd8bac393"
      }
    };

    axios
      .request(options)
      .then((response) => {
        console.log(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            amount
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(exchangeRate);

  return (
    <div className="currency-converter">
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <h4>Primary Currency: </h4>
                <td>
                  <input
                    type="number"
                    name="currency-amount-1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </td>
                <td>
                  <select
                    value={chosenPrimaryCurrency}
                    name="currency-option-1"
                    onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                  >
                    {currencies.map((currency, _index) => (
                      <option key={_index}>{currency}</option>
                    ))}
                  </select>
                </td>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Secondary Currency: </h4>
                <td>
                  <input
                    type="number"
                    name="currency-amount-2"
                    value={result}
                    disabled={true}
                  />
                </td>
                <td>
                  <select
                    value={chosenSecondaryCurrency}
                    name="currency-option-2"
                    onChange={(e) => setChosenSecondarry(e.target.value)}
                  >
                    {currencies.map((currency, _index) => (
                      <option key={_index}>{currency}</option>
                    ))}
                  </select>
                </td>
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={convert}>Convert</button>

        <ExchangeRate
          ExchangeRate={exchangeRate}
          result={result}
          chosenPrimaryCurrency={chosenPrimaryCurrency}
          chosenSecondaryCurrency={chosenSecondaryCurrency}
        />
      </div>
    </div>
  );
}

export default CurrencyConverter;
