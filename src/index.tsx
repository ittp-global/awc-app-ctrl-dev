import { render } from "react-dom";

import App from "./App";

import "@vkontakte/vkui";

// let api = grant.dfault();

let auth = [];

const rootElement = document.getElementById("root");
render(<App />, rootElement);
