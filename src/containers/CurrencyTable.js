import React, { Fragment, useState, useEffect } from "react";
import ApiCaller from "../services/ApiCaller";
const CurrrencyTable = () => {
  const [currenciesArray, setCurrensies] = useState([]);
  const bankApi = new ApiCaller();
  useEffect(() => {
    console.log(bankApi.getCurrenciesData());
  });
  return (
    <Fragment>
      <h1>Currencies are HERE</h1>
    </Fragment>
  );
};

export default CurrrencyTable;
