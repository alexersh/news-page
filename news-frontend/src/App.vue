<template>
  <div id="app" :class="{'theme-dark': nightMode}">
    <div class="container">
    <div id="nav">
      <router-link to="/home"> Home </router-link> | 
      <router-link to="/create"> Create </router-link>
      <i v-if="nightMode" @click="nightMode = !nightMode"><b-icon class="sun" icon="brightness-high"></b-icon></i>
      <i v-else @click="nightMode = !nightMode"><b-icon class="moon" icon="moon "></b-icon></i>
    </div>
    <router-view/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin, ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
  export default {
    data: () => {
      return {
        nightMode: false
      }
    },
    watch: {
      nightMode: function() {
        localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
      }
    },
    created() {
      this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
    }
  }
</script>

<style lang="scss">
  $modal-backdrop-opacity : 0.8;
  @import "bootstrap-vue/src/components/modal/index.scss";
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;  
    font-size: 1rem;
    width: calc(100% - 20px);
    min-height: 100vh;
    padding: 30px;
    transition: all .5s ease-in-out;
    color: #2c3e50;
    background-color: #efefef;
    .container {
      #nav {
        position: relative;
        height: 50px;
        text-align: center;
        a {
          font-weight: bold;
          color: inherit;
          font-size: 1.3rem;
        }
        a.router-link-exact-active {
        color: #42b983;
        }
        i {
          position: relative;
          font-size: 1.6rem;
          cursor: pointer;
        }
        .sun {
          color: #FCDA5F;
        }
        .moon {
          color: #041B37;
        }
      }
    }
    .form-wrapper {
    width: 500px; 
    margin: 0 auto;
    }
    &.theme-dark {
      color: #efefef;
      background-color: #333;
      .card {
        background-color: #222;
      }
      .card-header, .card-footer{
        background-color: rgb(26, 25, 25);
      }
    }
  }
</style>