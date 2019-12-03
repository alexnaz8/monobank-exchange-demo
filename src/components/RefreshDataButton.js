import React from "react";

const RefreshDataButton = ({ getCurrenciesData }) => {
    return (
        <div>
            <button onClick={() => getCurrenciesData()}>Refresh</button>
        </div>
    );
};

export default RefreshDataButton;
