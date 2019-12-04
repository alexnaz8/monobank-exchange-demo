import React from "react";

const RefreshDataButton = ({ getCurrenciesData }) => {
    return (
        <button
            className=" w-full bg-blue-300 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded"
            onClick={() => getCurrenciesData()}
        >
            Refresh
        </button>
    );
};

export default RefreshDataButton;
