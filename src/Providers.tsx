import {
  BannerProvider,
  PlatformProvider,
  ThemeProvider,
  ToastProvider,
} from "@smartrent/ui";
import { BrowserRouter, BrowserRouterProps } from "react-router-dom";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import type { ComponentType, ReactNode } from "react";

// had to force types because of react-router-dom@5.3.4
const Router = BrowserRouter as ComponentType<BrowserRouterProps>;

export function Providers({ children }: { children: ReactNode }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Router>
        <ThemeProvider>
          <PlatformProvider>
            <ToastProvider>
              <BannerProvider>{children}</BannerProvider>
            </ToastProvider>
          </PlatformProvider>
        </ThemeProvider>
      </Router>
    </GestureHandlerRootView>
  );
}
