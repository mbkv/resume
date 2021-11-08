// theme.ts
import { DefaultTheme } from "styled-components/macro";

interface Color {
  color: string;
  background: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    primary: Color;
    secondary: Color;
  }
}

export const theme: DefaultTheme = {
  primary: {
    color: "#222",
    background: "#eee",
  },
  secondary: {
    color: "#222",
    background: "#ddd",
  },
};
