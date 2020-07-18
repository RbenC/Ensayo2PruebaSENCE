<template>
    <div class="container mt-5 pt-5 mb-5 pb-5">  
    <div class="text-center"><h2>Listado de Mis Personajes Favoritos</h2></div>
        
        <div v-if="cantidadfavoritos.length>0">        
            <div class="row">    
                <div   
                    v-for="(favorito, index) in traerDataMisFavoritos" :key="index" class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                    <b-card-group deck >
                        <b-card 
                            title="" 
                            :img-src="favorito.image" 
                            :img-alt="favorito.name" img-top>
                            <b-card-text>
                                {{ favorito.name | mayuscula }}
                            </b-card-text>
                            <template v-slot:footer>
                                <a href="#" class="btn btn-warning mx-2" ><i class="far fa-trash-alt" data-toggle="tooltip" data-placement="top" title="Eliminar de Mis Favoritos" @click.prevent="quitar(index)" ></i></a>                        
                            </template>
                        </b-card>
                    </b-card-group>
                </div>
            </div>
        </div>
        <div v-else>
            <b-card 
                title="Sin Favoritos"
                img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyYCCiyvX3t8URC9CbadpQNu7mEA-TllzMEQ&usqp=CAU"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="text-center ml-5 pl-5"
            >
                <b-card-text>
                    <h5>Aún no existen Personajes Favoritos seleccionados por el usuario</h5>                
                </b-card-text>

                <b-button href="#" type="dark" variant="light" ><router-link to="/">Ir a Personajes</router-link></b-button>
            </b-card>
             
        </div>
        
  </div>
</template>

<script>
import Swal from 'sweetalert2'; 

export default {
    name: 'ListadoMisFavoritos',
    data(){
        return{
            cantidadfavoritos:0
        }
    },
    computed:{
        traerDataMisFavoritos(){
            return this.$store.getters.enviarDataMisFavoritos.filter((element)=>{
                return element.name.toLowerCase().includes(this.$store.state.busqueda.toLowerCase())
            });
        }
    },
    methods:{
        quitar(id){
            Swal.fire({
                title: 'Esta seguro ?',
                text: "Desea remover de su lista de favoritos",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
                }).then((result) => {
                    if (result.value) {
                         this.$store.dispatch('quitarFavorito', id);  //Usar esta linea para uso de VUEx
                    }
                })            
        }
    },
    mounted() {
        this.cantidadfavoritos = this.$store.getters.enviarDataMisFavoritos;
    }
}
</script>

<style>

</style>