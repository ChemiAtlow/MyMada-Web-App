//Modal components
import _AddTeamMember from "./Modals/AddTeamMember.vue";
import _AddToDictionary from "./Modals/AddToDictionary.vue";
import _ChangeName from "./Modals/ChangeName.vue";
import _MedicalCodes from "./Modals/MedicalCodes.vue";
import _SendToMoked from "./Modals/SendToMoked.vue";
import _Settings from "./Modals/Settings.vue";

export namespace ModalComponents {
    export const AddTeamMember = _AddTeamMember;
    export const AddToDictionary = _AddToDictionary;
    export const ChangeName = _ChangeName;
    export const MedicalCodes = _MedicalCodes;
    export const SendToMoked = _SendToMoked;
    export const Settings = _Settings;
}

//Moked Page Components
export namespace MokedPageComponents {
    export const Forms = () => import("@/components/MokedPage/Forms.vue");
    export const General = () => import("@/components/MokedPage/General.vue");
    export const Team = () => import("@/components/MokedPage/Team.vue");
}

//Moked Page Components
export namespace ToolsPageComponents {
    export const Apgar = () => import("@/components/ToolsPage/Apgar.vue");
    export const Contractions = () => import("@/components/ToolsPage/Contractions.vue");
    export const Dictionary = () => import("@/components/ToolsPage/Dictionary.vue");
    export const Glazgo = () => import("@/components/ToolsPage/Glazgo.vue");
    export const Metronome = () => import("@/components/ToolsPage/Metronome.vue");
    export const Oxygen = () => import("@/components/ToolsPage/Oxygen.vue");
    export const Ptotocoles = () => import("@/components/ToolsPage/Protocoles.vue");
    export const Pulse = () => import("@/components/ToolsPage/Pulse.vue");
    export const Vital = () => import("@/components/ToolsPage/Vital.vue");
}
