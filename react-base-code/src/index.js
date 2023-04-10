import React from 'react';
// import { render } from "react-dom";


//mongodb model
import ReactDom from "react-dom";
import { BrowserRouter } from 'react-router-dom';


import App from "./App";
import './index.scss';

ReactDom.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,

    document.getElementById('app')
);

//sir model
// import React from 'react';
// import { render } from 'react-dom';
 
// import App from "./App";
// import './index.scss';

// render(<App />,document.getElementById('app'));