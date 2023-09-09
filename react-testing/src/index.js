import React from 'react';
import ReactDOM from 'react-dom/client';

// Component names must begin with capital letter
function ReactFunction() {
    // Must return JSX (HTML item)
    return (
        <React.Fragment>
            <div className="test">
                <h3>Hello World</h3>
                <ul>
                    <li>
                        <a href="#">Hello world</a>
                    </li>
                </ul>
                <h2>Test</h2>
            </div>
        </React.Fragment>
    );
}

// Can also use React.createElement, but this is long-winded.
// function ReactFunction() {
//     return React.createElement('h2', {}, 'Hello World');
// }

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<ReactFunction></ReactFunction>)