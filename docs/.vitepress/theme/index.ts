import { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Example from "../components/Example.vue";
import DemoUI from "../../../dist/index.esm";
import "../../../dist/index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(DemoUI);
    app.component("DocsExample", Example);
  },
} as Theme;
