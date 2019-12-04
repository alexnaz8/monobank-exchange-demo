import React from "react";
import { getCurrencyName } from "../helpers/currencyHelper";

const ExchangeRatesCards = ({ currenciesArray }) => {
    const currenciesList = currenciesArray
        .filter(item => !!item.rateSell)
        .map((item, index) => {
            const [firstCurrency, secondCurrency] = getCurrencyName(item);
            const itemKey = item.currencyCodeA + item.currencyCodeB + index;
            return (
                <div
                    className=" text-gray-700 text-center bg-gray-300 px-5 py-5 m-2 rounded"
                    key={itemKey}
                >
                    <div className="xl:flex lg:items-center">
                        <img
                            className="rounded-lg w-full xl:w-32"
                            src="https://icon-library.net/images/currency-exchange-icon/currency-exchange-icon-9.jpg"
                            alt=""
                        />
                        <div className="mt-4 lg:mt-0">
                            <div className="uppercase tracking-wide text-lg md:text-sm text-gray-600 font-bold">
                                <p>{firstCurrency}</p>
                                <p className="text-gray-100">
                                    {secondCurrency}
                                </p>
                            </div>
                            <span className="uppercase block mt-1 text-lg leading-tight font-semibold text-gray-900">
                                sell {item.rateSell}
                            </span>
                            <span className="uppercase block mt-1 text-lg leading-tight font-semibold text-gray-900">
                                buy {item.rateBuy}
                            </span>
                        </div>
                    </div>
                </div>
            );
        });
    return <div className="sm:flex sm:justify-around">{currenciesList}</div>;
};

export default ExchangeRatesCards;
