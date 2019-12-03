import React from 'react';
import {getCurrencyName} from "../helpers/currencyHelper";

const ExchangeRatesTable = ({currenciesArray}) => {
    const currenciesList =
        currenciesArray.length > 0
            ? currenciesArray
                .filter(item => !!item.rateSell)
                .map((item, index) => {
                    const [firstCurrency, secondCurrency] = getCurrencyName(item);
                    const itemKey =
                        item.currencyCodeA + item.currencyCodeB + index;
                    return (
                        <li key={itemKey}>
                            currency pair: {firstCurrency}/{secondCurrency}{" "}
                            {item.rateSell} / {item.rateBuy}
                        </li>
                    );
                })
            : <h1>Data is loading...</h1>;
    return (
        <ul>
            {currenciesList}
        </ul>
    );
};

export default ExchangeRatesTable;
