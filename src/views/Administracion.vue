<template>
<!--  <div class="container my-5 py-5">
   {{sinComentarios}}-->
   <div>
    <ListadoAdministracion @ordendereiniciar="sinComentarios = $event"></ListadoAdministracion>
 
  </div>
</template>

<script>
import ListadoAdministracion from '../components/ListadoAdministracion.vue'

export default {
    name:'Administracion',
    data() {
      return {
        sinComentarios:''
      }
    },
    components:{
        ListadoAdministracion        
    },
    watch:{
       sinComentarios(nuevoValor, valorAnterior){
      console.log("El nombre pasó de ser '%s' a '%s'", valorAnterior, nuevoValor);
      if(this.sinComentarios==="Si"){
        this.$store.dispatch('reiniciarcomentarios');
        
      }
    }
    }

}
</script>

<style>

</style>