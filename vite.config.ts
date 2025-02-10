import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactNativeWeb from "vite-plugin-react-native-web";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        // include: [/node_modules\/(react-native|@react-native)/],
        // presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: [
          "@babel/plugin-proposal-nullish-coalescing-operator",
          "@babel/plugin-transform-optional-chaining",
          // [
          //   "@babel/plugin-transform-modules-commonjs",
          //   {
          //     strict: false,
          //     strictMode: false,
          //     allowTopLevelThis: true,
          //   },
          // ],
          "react-native-reanimated/plugin",
        ],
      },
    }),
    reactNativeWeb(),
  ],
  resolve: {
    alias: {
      "react-native-linear-gradient": "react-native-web-linear-gradient",
      "@react-native-community/async-storage": "react-native-web-async-storage",
      "@react-native-clipboard/clipboard": "react-native-web-clipboard",
    },
  },
});
