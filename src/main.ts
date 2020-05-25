import Vue from "vue";
import Waves from "vue-waves-effect";
import { MdButton, MdCard, MdCheckbox, MdChips, MdEmptyState, MdField, MdRadio, MdRipple, MdSnackbar, MdTabs, MdTooltip } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Navigation from "./components/AppBar.vue";
import Button from "./components/Button.vue";
import { DatabaseManager } from "./store/indexedDb";
import { setup } from "./utils/firebaseConfig";

DatabaseManager.InitDb()
    .then(() => {
        store.dispatch("user/initialize");
        store.dispatch("settings/initialize");
    })
    .catch(reason => {
        store.dispatch("alert/error", { message: reason });
    });

setup().then(token => store.dispatch("user/initializeFcm", token));

Vue.component("app-nav", Navigation);
Vue.component("app-btn", Button);
Vue.use(Waves);
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdCheckbox);
Vue.use(MdChips);
Vue.use(MdEmptyState);
Vue.use(MdField);
Vue.use(MdRadio);
Vue.use(MdRipple);
Vue.use(MdSnackbar);
Vue.use(MdTabs);
Vue.use(MdTooltip);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
