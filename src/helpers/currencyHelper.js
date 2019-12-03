import * as currencyInfo from "currency-codes";

export const getCurrencyName = item => [
    currencyInfo.number(item.currencyCodeA).currency,
    currencyInfo.number(item.currencyCodeB).currency
];
