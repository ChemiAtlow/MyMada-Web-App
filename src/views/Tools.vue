<template>
    <div class="tools">
        <md-empty-state v-if="!currentTool" md-icon="build" md-label="יש לבחור כלי" md-description="אנא בחר כלי מתפריט הצד."></md-empty-state>
        <contractions v-else-if="currentTool === 'contractions'"></contractions>
        <pulse v-else-if="currentTool === 'pulse'"></pulse>
        <metronome v-else-if="currentTool === 'metronome'"></metronome>
        <vital v-else-if="currentTool === 'vital'"></vital>
        <oxygen v-else-if="currentTool === 'oxygen'"></oxygen>
        <apgar v-else-if="currentTool === 'apgar'"></apgar>
        <glazgo v-else-if="currentTool === 'glazgo'"></glazgo>
        <dictionary v-else-if="currentTool === 'dictionary'"></dictionary>
        <ptotocoles v-else-if="currentTool === 'als' || currentTool === 'bls' || currentTool === 'dead'"></ptotocoles>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ToolsPageComponents } from "../components";

@Component({
    components: {
        Contractions: ToolsPageComponents.Contractions,
        Pulse: ToolsPageComponents.Pulse,
        Metronome: ToolsPageComponents.Metronome,
        Vital: ToolsPageComponents.Vital,
        Oxygen: ToolsPageComponents.Oxygen,
        Apgar: ToolsPageComponents.Apgar,
        Glazgo: ToolsPageComponents.Glazgo,
        Dictionary: ToolsPageComponents.Dictionary,
        Ptotocoles: ToolsPageComponents.Ptotocoles,
    },
})
export default class Tools extends Vue {
    get currentTool(): string | undefined {
        return this.$route.params.tool;
    }
}
</script>

<style lang="scss" scoped>
.tools {
    height: 100%;
    display: flex;
    flex-flow: column;
    @include tablet {
        flex-flow: row;
    }
    @include desktop {
        margin-right: 19rem;
        #app.lang-en & {
            margin-right: 0;
            margin-left: 19rem;
        }
    }
}
</style>
