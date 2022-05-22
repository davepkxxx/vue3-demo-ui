import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Vue 3.0 UI",
  description: "The vue 3.0 UI demo",
  themeConfig: {
    nav: [
      { text: "Components", link: "/components/" },
    ],
    sidebar: {
      "/components/": [
        {
          text: "Base",
          children: [
            { text: "Button", link: "/components/button" },
          ],
        },
      ],
    },
  },
});
