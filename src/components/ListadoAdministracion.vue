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
    
    <div v-if="cantidadMisComentarios.length>0" class="text-center">
        <button class="btn btn-primary"  @click="reiniciar">Reiniciar Arreglo de Comentarios</button>
    </div>
  



  </div>
</template>

<script>
import Swal from 'sweetalert2'; 
import SinComentario from '../assets/sincomentarios.png';


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
            reinicio:0,
            activarborrado:'No',
            imagesincomentario: SinComentario

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
             this.activarborrado='Si';
             //console.log("comentarios en blanco "+this.activarborrado)
              //this.$emit('ordendereiniciar',this.comentarios);

             Swal.fire({
                title: 'Esta seguro ?',
                text: "Desea Reiniciar el Arreglo ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
                }).then((result) => {
                    if (result.value) {
                        this.$emit('ordendereiniciar',this.activarborrado);
                        //this.cantidadMisComentarios=0;
                    }
                })
            
        }
    },
    mounted() {
        this.cantidadMisComentarios = this.$store.getters.enviarDataComentariosPersonajes;
       // this.$emit('ordendereiniciar',this.reinicio);

    }


}
</script>

<style scoped lang="scss">

.table-hover tbody tr:hover td {  // color fondo hover tabla
  background-color: #6ed1d1;
}

</style>