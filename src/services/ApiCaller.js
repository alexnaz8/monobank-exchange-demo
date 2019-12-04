import axios from "axios";
class ApiCaller {
    getCurrenciesData() {
        return axios(process.env.REACT_APP_CURENCY_ENDPOINT)
            .then(({data}) => data)
            .catch(err => console.log("Error happened:", err));
    }
    getCurrenciesCallStatus() {
        axios(process.env.REACT_APP_CURENCY_ENDPOINT)
            .then(({ status }) => status)
            .catch(err => console.log(err));
    }
}

export default ApiCaller;
