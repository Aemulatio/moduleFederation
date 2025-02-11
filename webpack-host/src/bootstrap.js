import React from "react";
import App from "./App";
import "./App.scss";
import {createRoot} from "react-dom/client";

const el = document.getElementById("app");
console.log('el: ', el);
createRoot(el).render(<App/>);
