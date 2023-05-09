// Load polyfills (once, on the top of our web app)
import "core-js/stable";
import "regenerator-runtime/runtime";
import "./index.css";

/**
 * Frontend code running in browser
 */
import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ConfigContext from "../components/ConfigContext";
import { Config } from "../server/config";
import App from "../App";

const config = (window as any).__CONFIG__ as Config;
delete (window as any).__CONFIG__;

const basename = config.app.URL.match(/^(?:https?:\/\/)?[^\/]+(\/?.+)?$/i)?.[1];
const container = document.getElementById("root");
/** Components added here will _only_ be loaded in the web browser, never for server-side rendering */
const render = () => {
  hydrateRoot(
    // @ts-ignore
    container,
    <>
      <ConfigContext.Provider value={config}>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </ConfigContext.Provider>
    </>
  );
};

render();
