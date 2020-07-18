<template>
  <div class="container mt-5 pt-5 mb-5 pb-5">
    <div class="text-center"><h2>Listado de Mis Comentarios</h2></div>
        <div v-if="cantidadMisComentarios.length>0">
            <div class="card-footer text-center">
            <jw-pagination :items="traerDataComentariosPersonajes" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
        </div>


        <table class="table table-hover table-responsive ">
            <thead>
                <tr>
                <th>#</th>
                <th>Personaje</th>
                <th>Imagen</th>
                <th>Opinión</th>
                <th>Usuario</th>                                
                <th>Editar</th>
                <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(opinion, index) in pageOfItems" :key="index">            
                    <td>{{index+1}}</td>
                    <td>{{opinion.name}}</td>
                    <td><img :src="opinion.image" :alt="opinion.name" width="10%"></td>                    
                    <td>{{opinion.comment}}</td>                                
                    <td>{{opinion.nombre}}</td>
                    <td><a href="#" class="btn btn-warning mx-2" ><i class="fas fa-edit" data-toggle="tooltip" data-placement="top" title="Editar Comentario" @click.prevent="editar(opinion.id)" ></i></a></td>
                    <td><a href="#" class="btn btn-warning mx-2" ><i class="far fa-trash-alt" data-toggle="tooltip" data-placement="top" title="Eliminar Comentario" @click.prevent="quitar(index)" ></i></a></td>
                </tr>    
            </tbody>
        </table>


        </div>

        <div v-else>
            <b-card 
                title="Sin Comentarios"
                img-src="https://lh3.googleusercontent.com/proxy/6_vHEDPTQD-wnk_yRUmj-hv968HO_UhwjTVTlX3T_rk2X6O4WrwWsckpTO5m7PJA_2hSFzrfHcP29KFelRLckT80caZwg0QvqeBrnC25exCa7cdCifb4U1DXvdg0RhzRg69plltBZ2Z51X6mrkNzFcJ7gyc"
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
    
    <div class="text-center">
        <button class="btn btn-primary" @click="reiniciar">Reiniciar Arrgelo</button>
    </div>
  



  </div>
</template>

<script>
import Swal from 'sweetalert2'; 

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};

export default {
    name:'ListadoAdministracion',
    data(){
        return{
            cantidadMisComentarios:0,
            pageOfItems: [],
            customLabels,
            reinicio:0
        }
    },    
    computed:{
        traerDataComentariosPersonajes(){
            return this.$store.getters.enviarDataComentariosPersonajes;           
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
                         this.$store.dispatch('quitarComentario', id);  //Usar esta linea para uso de VUEx
                    }
                })            
        },
        editar(id){
            console.log(id);
            this.$router.push(`/opinion/${id}`)
            
        },
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
        reiniciar(){
            this.reinicio=1
        }
    },
    mounted() {
        this.cantidadMisComentarios = this.$store.getters.enviarDataComentariosPersonajes;
        this.$emit('ordendereiniciar',this.reinicio);
    }


}
</script>

<style>

</style>