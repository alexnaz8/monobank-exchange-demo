import axios from "axios";

class ApiCaller {
  endpoints = "";
  async getCurrenciesData() {
    const res = await axios("https://api.monobank.ua/bank/currency");
    console.log(await res.data);
    return res;
  }
  getCurrenciesCallStatus() {
    axios("https://api.monobank.ua/bank/currency")
      .then(({ status }) => status)
      .catch(err => console.log(err));
  }
}

export default ApiCaller;
