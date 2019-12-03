import React, { Fragment, useState, useEffect } from "react";
import ApiCaller from "../services/ApiCaller";
import RefreshDataButton from "../components/RefreshDataButton";
import ExchangeRatesTable from "../components/ExchangeRatesTable";
const CurrencyTable = () => {
    const [currenciesArray, setCurrencies] = useState([]);
    const bankApi = new ApiCaller();
    const getCurrenciesData = () => {
        bankApi.getCurrenciesData().then(res => {
            setCurrencies(res);
        });
    };

    useEffect(() => {
        getCurrenciesData();
    }, []);

    return (
        <Fragment>
            <h1>Currencies are HERE</h1>
            <RefreshDataButton getCurrenciesData={getCurrenciesData} />
            <ExchangeRatesTable currenciesArray={currenciesArray} />
        </Fragment>
    );
};

export default CurrencyTable;
