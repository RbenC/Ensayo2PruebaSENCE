<template>
  <div>
    <!-- Modal -->
        <div class="modal fade" :id="'comic'+index" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" v-text="name"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body container">
                    <div class="row">
                        <div class="col-4 text-center" >
                            <img :src="image" :alt="name" width="80%">
                        </div>

                        <div class="col-8 text-left" >
                            <table class="table-sm">
                                <tr>
                                    <td>Status</td>
                                    <td v-text="status"></td>
                                </tr>
                                <tr>
                                    <td>Species</td>
                                    <td v-text="species"></td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td v-text="location"></td>
                                </tr>
                                <tr>
                                    <td>Episodes</td>
                                    <td v-text="episode"></td>
                                </tr>
                                <tr>
                                    <td>Created</td>
                                    <td v-text="created"></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <a href="#" class="btn btn-warning mx-2" data-dismiss="modal"><i class="fas fa-sign-out-alt" data-toggle="tooltip" data-placement="top" title="Cerrar Ventana"  ></i></a>
                    <a href="#" class="btn btn-success mx-2" :class="{ favorito: activo }"><i class="fas fa-heart" data-toggle="tooltip" data-placement="top" title="Mis Favoritos" @click.prevent="favoritos" ></i></a>
                </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
    name: 'ModalComic',
    data(){
        return{
            activo:false
        }
    },
    props: [
        'index',
        'name',
        'image',
        'status',
        'species',
        'location',
        'episode',
        'created'
    ],
    methods:{
        favoritos(){
            let auxiliarFavorito={
                id: this.index,
                name: this.name,
                image: this.image,
            }
            this.name ? this.activo : !this.activo ;
            this.$store.dispatch('agregarMisFavoritos', auxiliarFavorito);
            Swal.fire("Se ha guardado este personaje como Favorito")
            
        }
    }
}
</script>

<style>
.favorito {
    background-color: red;
}
</style>