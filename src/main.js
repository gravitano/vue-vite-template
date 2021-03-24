import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import gitsUi from "@frontend/gits-ui";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(gitsUi);

app.mount("#app");
