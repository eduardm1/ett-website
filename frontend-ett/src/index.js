import React from "react";
import ReactDOM from "react-dom";

import HttpClient from "./network/http";
import App from "./App";
import RequestService from "./service/Request";
import "./index.css";

//base URL is url of the backend server. it is saved in .env
const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
const requestService = new RequestService(httpClient);

ReactDOM.render(
    <App requestService={requestService} />,
  document.getElementById("root")
);

//read React restrict components
