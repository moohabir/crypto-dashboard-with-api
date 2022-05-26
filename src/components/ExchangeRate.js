import React from "react";

function ExchangeRate({
  exchangeRate,
  result,
  chosenPrimaryCurrency,
  chosenSecondaryCurrency
}) {
  return (
    <div className="exchange-rate">
      <h2>Exchange Rate</h2>
      <h4>{result}</h4>
      <span>
        {chosenPrimaryCurrency} to {chosenSecondaryCurrency}
      </span>
    </div>
  );
}

export default ExchangeRate;
