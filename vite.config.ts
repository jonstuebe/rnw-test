import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactNativeWeb from "vite-plugin-react-native-web";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), reactNativeWeb()],
  resolve: {
    alias: {
      "react-native-linear-gradient": "react-native-web-linear-gradient",
      "@react-native-community/async-storage": "react-native-web-async-storage",
      "@react-native-clipboard/clipboard": "react-native-web-clipboard",
    },
  },
});
