<template>
    <frozen-side-bar>
        <template>
            <contraction v-for="(contraction, index) in contractions" :key="index" :id="index + 1" :contraction="contraction"></contraction>
        </template>
        <template #side>
            <circular-button @started="startContractions" @stopped="stopContractions">{{ btnText }}</circular-button>
        </template>
    </frozen-side-bar>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import CircularButton from "@/components/CircularButton.vue";
import FrozenSideBar from "@/components/FrozenSideBar.vue";
import Contraction from "@/components/Contraction.vue";
import { DatabaseManager } from "@/store/indexedDb";

@Component({
    components: {
        CircularButton,
        Contraction,
        FrozenSideBar,
    },
})
export default class Contractions extends Vue {
    btnText: string | any = "";
    startTime!: number;
    contractions: globalThis.Contraction[] = [];

    async created() {
        this.btnText = this.$t("tools-page.contractions.start");
        let tmpContractions = await DatabaseManager.GetContractions();
        let lastData = 0;
        if (tmpContractions && tmpContractions.length) lastData = tmpContractions[tmpContractions.length - 1].endTime;
        let lastDataAge = (new Date().getTime() - lastData) / (1000 * 60);
        if (lastDataAge <= 20) {
            this.$store.dispatch("setContractions", tmpContractions);
            this.$store.dispatch("alert/restoreContractions");
        }
    }
    startContractions() {
        this.btnText = this.$t("tools-page.contractions.end");
        this.startTime = new Date().getTime();
    }
    stopContractions() {
        this.btnText = this.$t("tools-page.contractions.start");
        let oldEnd = this.contractions[this.contractions.length - 1]?.endTime;
        this.contractions.push({ startTime: this.startTime, endTime: new Date().getTime(), previousEnd: oldEnd });
        this.$store.dispatch("setContractions", this.contractions);
    }
    @Watch("$store.state.retrieveContractions")
    retrieveChanged() {
        let ret = this.$store.state.retrieveContractions;
        if (ret) {
            this.contractions = this.$store.state.contractions;
            this.$store.dispatch("setRetrieveContractions", false);
            this.$store.dispatch("setContractions", this.contractions);
        }
    }
}
</script>
