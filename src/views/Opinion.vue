<template>
  <div class="container py-5 my-5">
        <div v-for="(opinion,index) in traerDataComentariosPersonajes" :key="index">
            <form id="formulario"  >
                <div class="form-group">
                    <label for="exampleInputEmail1">Su Nombre</label>
                    <input type="text" class="form-control"  aria-describedby="nombreHelp" readonly v-model="nombre" >
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Su Nuevo Comentario</label>
                    <textarea  cols="60" rows="8"></textarea>    
                </div>
                
                <button type="submit" class="btn btn-primary mx-5" >Submit</button>
                <button type="submit" class="btn btn-primary" @click.prevent="guardar" >Guardar</button>
            </form>
        </div>
    
  </div>
</template>

<script>
export default {
    name: 'Opinion',
    data(){
        return{
            cantidadMisComentarios:0,
            nombre:'',
            txtcomentario:''
            
        }
    },    
    computed:{
        traerDataComentariosPersonajes(){
            return this.$store.getters.enviarDataComentariosPersonajes.filter(dato=>parseInt(dato.id) === parseInt(this.$route.params.id));
        }
    },
    mounted(){
        this.nombre = this.$store.state.autor;
    }

}
</script>

<style scoped lang="scss">
    
#formulario {
    width: 400px;
    margin-left: auto;
    margin-right: auto;

}

</style>