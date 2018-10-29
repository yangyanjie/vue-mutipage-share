<template>
    <div id="app">
        <div class="view" v-if="loading">
            <!-- <loading-layer></loading-layer> -->
        </div>
        <router-view class="view" :class="{hide:loading}"></router-view>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';

    export default {
        name: 'app',
        computed: {
            ...mapGetters({
                loading: 'loading',
            })
        },
        methods: {

        },
        
    };
</script>

<style lang="scss">
    @import './assets/css/reset.css';
    #app {
        width: 100%;
        height: 100%;
    }
</style>
