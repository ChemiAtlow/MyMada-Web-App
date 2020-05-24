<template>
    <menu class="tools-nav" :class="{ open: menuState }">
        <ul class="tools-nav__menu">
            <li class="tools-nav__menu-item tools-nav__menu-item__large-only" @click="goHome">
                <i class="tools-nav__menu-item__icon material-icons">arrow_forward</i>
                עמוד הבית
            </li>
            <li class="tools-nav__menu-item">
                <router-link to="/tools/contractions">
                    <i class="tools-nav__menu-item__icon icon-contractions"></i>
                    שעון צירים
                </router-link>
            </li>
            <li class="tools-nav__menu-item">
                <router-link to="/tools/pulse">
                    <i class="tools-nav__menu-item__icon icon-pulse"></i>
                    שעון דופק
                </router-link>
            </li>
            <li class="tools-nav__menu-item">
                <router-link to="/tools/metronome">
                    <i class="tools-nav__menu-item__icon icon-metronome"></i>
                    מטרונום
                </router-link>
            </li>
            <li class="tools-nav__menu-item">
                <router-link to="/tools/vital">
                    <i class="tools-nav__menu-item__icon icon-vital"></i>
                    מחשבון מדדים
                </router-link>
            </li>
            <li class="tools-nav__menu-item">
                <router-link to="/tools/oxygen">
                    <i class="tools-nav__menu-item__icon icon-oxygen"></i>
                    מחשבון חמצן
                </router-link>
            </li>
            <li class="tools-nav__menu-item">
                <router-link to="/tools/apgar">
                    <i class="tools-nav__menu-item__icon icon-apgar"></i>
                    מחשבון אפגאר
                </router-link>
            </li>
            <li class="tools-nav__menu-item">
                <router-link to="/tools/glazgo">
                    <i class="tools-nav__menu-item__icon icon-glazgow"></i>
                    מחשבון גלאזגו
                </router-link>
            </li>
            <li class="tools-nav__menu-item">
                <router-link to="/tools/dictionary">
                    <i class="tools-nav__menu-item__icon icon-dictionary"></i>
                    מילון רפואי
                </router-link>
            </li>
        </ul>
        <div class="tools-nav__seperator"></div>
        <p class="tools-nav__title">פרוטוקולים</p>
        <ul class="tools-nav__menu">
            <li class="tools-nav__menu-item">
                <router-link to="/tools/als">
                    <i class="tools-nav__menu-item__icon icon-als"></i>
                    פרוטוקולי ALS
                </router-link>
            </li>
            <li class="tools-nav__menu-item">
                <router-link to="/tools/bls">
                    <i class="tools-nav__menu-item__icon icon-bls"></i>
                    פרוטוקולי BLS
                </router-link>
            </li>
            <li class="tools-nav__menu-item">
                <router-link to="/tools/dead">
                    <i class="tools-nav__menu-item__icon icon-dead"></i>
                    קונטרס "גישה לנפטר"
                </router-link>
            </li>
        </ul>
    </menu>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ToolsMenu extends Vue {
    @Prop({ type: Boolean, required: true, default: false }) readonly menuState!: boolean;
    goHome() {
        this.$router.replace("/");
    }
}
</script>

<style lang="scss" scoped>
.tools-nav {
    position: fixed;
    z-index: 50;
    right: 0;
    top: 3.5rem;
    bottom: 0;
    width: 19rem;
    background-color: white;
    margin: 0;
    padding: 0;
    transition: transform 0.3s ease-out;
    overflow-y: auto;
    transform: translateX(100%);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    &.open {
        transform: translateX(0%);
    }
    @include desktop {
        transform: translateX(0%);
    }
    &__menu {
        list-style: none;
        padding: 0;
        margin: 0;
        &-item {
            cursor: pointer;
            line-height: 3rem;
            &__large-only {
                @include desktop {
                    display: none;
                }
            }
            &:hover,
            &.active {
                background-color: $background;
            }
            & > a {
                display: block;
                color: black;
            }
            &__icon {
                color: $backdropBackground;
                vertical-align: middle;
                margin: 0 0.7rem 0 1.2rem;
            }
        }
    }
    &__seperator {
        margin: 0.5rem 0 0 0;
        height: 1px;
        overflow: hidden;
        background-color: $background;
    }
    &__title {
        color: $secondaryError;
        padding: 0 1rem;
    }
}
</style>