<template>  
    <div class="container mt-5 pt-5 mb-5 pb-5">  
    <div class="row">    
        <div v-for="(personaje, index) in traerDataComics" :key="index" class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">            
            <b-card-group deck >
                <b-card 
                    :title="personaje.name" 
                    :img-src="personaje.image" 
                    :img-alt="personaje.name" img-top>
                <b-card-text>
                        
                    </b-card-text>
                    <template v-slot:footer>
                        <a href="#" class="btn btn-primary mx-2" data-toggle="modal" :data-target="'#comic'+index"><i class="fas fa-search-plus" data-toggle="tooltip" data-placement="top" title="Ver más información" ></i></a>
                        <b-button v-b-modal="'modalcomentario'+index" variant="primary" class="mx-2" :class="{ favorito: activo }"><i class="far fa-comment-dots" data-toggle="tooltip" data-placement="top" title="Escribir un comentario" ></i></b-button> 
                    </template>
                </b-card>
            </b-card-group>

<!--modal Comentarios -->
    <b-modal :id="'modalcomentario'+index" :title="personaje.name" hide-footer >
        <div class="text-center">
            <img :src="personaje.image" :alt="personaje.name" width="50%">
        </div>
        <div class="my-4">
            <input type="text" placeholder="Tu Nombre "  v-model="nombre" maxlength="20" >
            <textarea cols="60" rows="6" maxlength="480" placeholder="Escribe un comentario a tu personaje favorito" v-model="txtcomentario" @keyup="caracteres--"></textarea>
            <p v-if="caracteres>0"> caracteres restantes {{caracteres}}/480 </p>
            <p v-else>caracteres restantes 0/480</p>
            <b-button variant="primary mx-5"   @click="guardarComentariosPersonajes(personaje)">Guardar </b-button>
         </div>
    </b-modal>

<!--Modal Ver más informacion-->    
        <ModalComic 
        :index="index"
        :name="personaje.name"
        :image="personaje.image"
        :status="personaje.status"
        :species="personaje.species"
        :location="personaje.location.name"
        :episode="personaje.episode.length"
        :created="personaje.created"
        >        
        </ModalComic>

        </div>
    </div>
  </div>

</template>

<script>


export default {
    name:'ListadoComics'
}
</script>

<script>
import Swal from 'sweetalert2';
import ModalComic from '../components/ModalComic.vue'

export default {
    name: 'ListadoCountries',
    components:{
        ModalComic
    },
    data(){
        return{
            activo:true,
            txtcomentario:'',
            caracteres:480,
            nombre:''
        }
    },        
    computed:{
        traerDataComics(){
            return this.$store.getters.enviarDataComics.filter((element)=>{
                return element.name.toLowerCase().includes(this.$store.state.busqueda.toLowerCase())
            });
        }
    },
    methods:{
          guardarComentariosPersonajes(personaje){
            if(this.txtcomentario.length > 20 && this.txtcomentario.length <= 480 && this.nombre.length > 2 && this.nombre.length <= 20 ){
                //console.log("si entramos")                
                let auxiliarComentario={
                    id:personaje.id,                    
                    name: personaje.name,
                    image: personaje.image,
                    url: personaje.url,
                    created: personaje.created,
                    comment: this.txtcomentario,
                    nombre: this.nombre
                }                
                personaje.name ? this.activo : !this.activo ;
                this.$store.dispatch('guardarComentariosPersonajes', auxiliarComentario);
                this.txtcomentario='';
                this.nombre='';
                this.caracteres=480;
                Swal.fire("Se ha guardado este comentario para su personaje")
                
                //this.$router.push('/administracion')

            }else {
                Swal.fire("Escriba un comentario, indicando su nombre  ")
            }
        },
    },

    created(){
        this.nombre = this.$store.state.autor ; 
    }
}
</script>

<style scoped lang="scss">
#countries{
    text-align: center;
}

.default {
    background-color: 
    green;
}

.favorito {
    background-color: green;
}

</style>