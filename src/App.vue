<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <BarraNavegacionActivo></BarraNavegacionActivo>
    <router-view/>
    <Footer></Footer>


    
  </div>
</template>


<script>
import { series } from './configuracion/conexionApi';
import BarraNavegacionActivo from './components/BarraNavegacionActivo.vue';
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components:{
    BarraNavegacionActivo,
    Footer
  },


  mounted(){
    series();
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}



$primary: #6ed1d1;
@import './node_modules/bootstrap/scss/bootstrap.scss';

.Oswald {
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.Volkhov {
    font-family: 'Volkhov', serif;
    color: red;
    font-size: 16px;
}

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Volkhov:wght@700&display=swap');
</style>
