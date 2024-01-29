import {createRoot} from "react-dom/client";
import App from "./App";
import React from "react";

// @ts-ignore
const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)