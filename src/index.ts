import { Plugin } from "vue";
import Card from "./components/container/Card.vue";
import Button from "./components/button/Button.vue";
import "./styles/base.css";

export {
  Card,
  Button,
};

export default {
  install(app) {
    [
      Card,
      Button,
    ].forEach((comp) => {
      app.component(comp.name, comp);
    });
  },
} as Plugin;
