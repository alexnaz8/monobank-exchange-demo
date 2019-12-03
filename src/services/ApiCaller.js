import axios from "axios";
import { dummyData } from "../constants/dummyData";
class ApiCaller {
    endpoints = "";
    async getCurrenciesData() {
        /*axios("https://api.monobank.ua/bank/currency").then(res =>
      console.log(res)
    );*/
        //console.log("Response", responseExchangeRates);
        await imitateServer();
        console.log("hello");
        const responseExchangeRates = dummyData;
        return responseExchangeRates;
    }
    getCurrenciesCallStatus() {
        axios("https://api.monobank.ua/bank/currency")
            .then(({ status }) => status)
            .catch(err => console.log(err));
    }
}

export default ApiCaller;

function imitateServer() {
    return new Promise(resolve => setTimeout(resolve, 1500));
}
