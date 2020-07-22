<template>
  <div class="container mt-5 pt-5 mb-5 pb-5">
    <div class="text-center"><h2>Listado de Mis Comentarios</h2></div>
    
        <div v-if="cantidadMisComentarios.length>0"> 

           <div class="accordion" id="accordionExample">
                <div class="card" v-for="(comentario, index) in traerDataComentariosPersonajes" :key="index">
                    <div class="card-header" :id="'heading'+index">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="'#collapse'+index" aria-expanded="true" aria-controls="collapseOne">
                            Opinion sobre: {{comentario.name}}. Realizado por: {{comentario.nombre | mayuscula}}
                            </button>
                        </h2>
                    </div>
                    
                    <div :id="'collapse'+index" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                            {{comentario.comment}}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    
        <div v-else>
            <b-card 
                title="Sin Comentarios"
                :img-src="imagesincomentario"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="text-center ml-5 pl-5"
            >
                <b-card-text>
                    <h5>Aún no existen Comentarios registrados por el usuario</h5>                
                </b-card-text>

                <b-button href="#" type="dark" variant="light" ><router-link to="/">Ir a Personajes</router-link></b-button>
            </b-card>
             
        </div>
  
  </div>
</template>

<script>
import SinComentario from '../assets/sincomentarios.png';

export default {
    name:'ListadoMisComponentes',
    data(){
        return{
            cantidadMisComentarios:0,
            imagesincomentario: SinComentario
        }
    },    
    computed:{
        traerDataComentariosPersonajes(){
            return this.$store.getters.enviarDataComentariosPersonajes;            
        }
    },
    mounted() {
        this.cantidadMisComentarios = this.$store.getters.enviarDataComentariosPersonajes;
    }

    

}
</script>

<style>

</style>