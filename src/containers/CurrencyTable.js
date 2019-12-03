import React, { Fragment, useState, useEffect } from "react";
import * as currencyInfo from "currency-codes";
import ApiCaller from "../services/ApiCaller";
const CurrrencyTable = () => {
    const [currenciesArray, setCurrensies] = useState([]);
    const bankApi = new ApiCaller();
    useEffect(() => {
        bankApi.getCurrenciesData().then(res => {
            setCurrensies(res);
        }, []);
    });
    const currenciesList =
        currenciesArray.length > 0
            ? currenciesArray
                  .filter(item => !!item.rateSell)
                  .map((item, index) => {
                      const getCurrencyName = () => [
                          currencyInfo.number(item.currencyCodeA).currency,
                          currencyInfo.number(item.currencyCodeB).currency
                      ];
                      const [firstCurrecy, secondCurrecy] = getCurrencyName();
                      const itemKey =
                          item.currencyCodeA + item.currencyCodeB + index;
                      return (
                          <li key={itemKey}>
                              currency pair: {firstCurrecy}/{secondCurrecy}{" "}
                              {item.rateSell} / {item.rateBuy}
                          </li>
                      );
                  })
            : null;
    return (
        <Fragment>
            <h1>Currencies are HERE</h1>
            <ul>{currenciesList}</ul>
        </Fragment>
    );
};

export default CurrrencyTable;
