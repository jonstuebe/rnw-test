import { render } from "react-dom";
import App from "./App";
import { disableIOSZoom } from "@smartrent/utils";
import { Providers } from "./Providers";

import "react-native-gesture-handler";
import "resize-observer-polyfill/dist/ResizeObserver.global";

import "./index.css";

disableIOSZoom();

render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("root")
);
