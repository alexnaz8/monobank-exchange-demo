import React from "react";

const Loader = () => {
    return (
        <div className="max-w-sm mx-auto mt-12 flex justify-center items-center p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-xl font-bold text-gray-700">Data loading...</h2>
            <div
                className="w-12 h-12 bg-contain bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('http://66.media.tumblr.com/f02aed641beb7a5059d57484c7f80f8c/tumblr_nlmmguXypN1tv87ujo1_400.gif')"
                }}
            ></div>
        </div>
    );
};

export default Loader;
