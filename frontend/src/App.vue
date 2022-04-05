<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item navbar-start"><strong>WIS</strong></router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <template v-if="$store.state.isAuthenticated">
            <router-link to="/dashboard" class="navbar-item">کارتابل</router-link>
          </template>
          <template v-else>
            <router-link to="/dashboard" class="navbar-item">خانه</router-link>
            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/sign-up" class="button is-success"><strong>ثبت نام</strong></router-link>
                <router-link to="/log-in" class="button is-light">ورود</router-link>

              </div>
            </div>
          </template>
        </div>
      </div>
    </nav>
  
  <section class="section">
  <router-view/>
  </section>
  <footer class="footer"><p class="has-text-centered">Copyright (c) 2022</p></footer>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App', 
  beforeCreate() {
    this.$store.commit('initializeStore')
    const wistoken = this.$store.state.wistoken
    if (wistoken) {
      axios.defaults.headers.common['Authorization'] = "Token "+wistoken
    } else {
      axios.defaults.headers.common['Authorization'] = ""
    }
  },
}
</script>
<style lang="scss">
@import '../node_modules/bulma';

@font-face {
  font-family: "Tanha-FD";
  src: url("./assets/fonts/Tanha-FD.eot");
  src: url("./assets/fonts/Tanha-FD.eot?#iefix") format("FontName-opentype"),
    url("./assets/fonts/Tanha-FD.woff") format("woff"),
    url("./assets/fonts/Tanha-FD.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
body {
  font-family: 'Tanha-FD';
}

.navbar-end {
  float: right !important;
}

</style>
