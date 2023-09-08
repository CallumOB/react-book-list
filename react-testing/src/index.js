import React from 'react';
import ReactDOM from 'react-dom/client';

function ReactFunction() {
    return <h1>Something...</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<ReactFunction></ReactFunction>)