<template>
  <div class="container py-5 my-5">
        <div v-for="(opinion,index) in traerDataComentariosPersonajes" :key="index">        
            <form id="formulario"  >
                <div class="form-group">
                    <label for="exampleInputEmail1">Su Nombre</label>
                    <input type="text" class="form-control"  aria-describedby="nombreHelp" readonly v-model="opinion.nombre" >
                </div>

                <div class="form-group">                                        
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Ver Comentario Anterior
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                {{opinion.comment}}
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <label for="exampleInputPassword1">Su Nuevo Comentario</label> 
                    <textarea  cols="60" rows="8" v-model="txtcomentario" ></textarea>    
                </div>
                
                <button type="submit" class="btn btn-light mx-5 "  ><router-link to="/administracion">Regresar</router-link>  </button>
                <button type="submit" class="btn btn-primary" @click.prevent="guardar(opinion.id)" >Guardar</button>
            </form>
        </div>
    
  </div>
</template>


<script>
import Swal from 'sweetalert2';

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
    },

    methods:{
        guardar(id){
            if(this.txtcomentario.length > 20 && this.txtcomentario.length <= 480 ){
             let auxiliarComentario={
                    id: id,
                    commentario: this.txtcomentario
                }                
                this.$store.dispatch('editarComentario',auxiliarComentario)
                this.$router.push('/administracion')
            }else {
                Swal.fire("Escriba un nuevo comentario, si desea actualizar")
            }

        }
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