<template>
  <div>
  
    <ListadoMisComponentes @ordendereiniciar="reinicio = $event"></ListadoMisComponentes>

  </div>
</template>

<script>
import ListadoMisComponentes from '../components/ListadoMisComentarios.vue'


export default {
    name:'MisComentarios',
    data() {
      return {
        reinicio:''
      }
    },
    components:{
        ListadoMisComponentes,
        
    },
    mounted(){
      if (this.reinicio) {
        this.$store.dispatch('reiniciarcomentarios')
      }


    }
    

}
</script>

<style>

</style>