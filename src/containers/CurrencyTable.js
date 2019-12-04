import React, { useState, useEffect } from "react";
import ApiCaller from "../services/ApiCaller";
import RefreshDataButton from "../components/RefreshDataButton";
import ExchangeRatesCards from "../components/ExchangeRatesCards";
import Loader from "../components/Loader";
const CurrencyTable = () => {
    const [currenciesArray, setCurrencies] = useState([]);
    const bankApi = new ApiCaller();
    const getCurrenciesData = () => {
        setCurrencies([]);
        bankApi.getCurrenciesData().then(res => {
            setCurrencies(res);
        });
    };

    useEffect(() => {
        getCurrenciesData();
    }, []);

    return (
        <>
            <h1 className="text-xl font-bold mt-6 sm:text-5xl sm:mt-1 text-gray-800 text-center">
                Currencies are HERE
            </h1>
            {currenciesArray.length > 0 ? (
                <div className="container mt-5 mx-auto px-2">
                    <ExchangeRatesCards currenciesArray={currenciesArray} />
                    <RefreshDataButton getCurrenciesData={getCurrenciesData} />
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default CurrencyTable;
