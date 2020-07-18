<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="info" fixed="bottom">

            
                <!-- Right aligned nav items -->
                
                    <div class="container text-center Volkhov">
                        <b-row>                        
                            <b-col cols="6">
                                Web: {{this.$store.state.autor}} &copy; {{this.$store.state.fechacreacion}} 
                            </b-col>
                            <b-col cols="6">
                                <a href="https://es-la.facebook.com/" target="_blank" btn btn-warning><i class="fab fa-facebook-f mx-2"></i></a>
                                <a href="https://twitter.com/explore" target="_blank" btn btn-warning><i class="fab fa-twitter mx-2"></i></a>
                                <a href="https://www.youtube.com/" target="_blank" btn btn-warning><i class="fab fa-youtube mx-2"></i></a>
                            </b-col>
                        </b-row>
                    </div>


                    
                    

                
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'BarraNavegacion',
    data(){
        return{
            txtbusqueda:''
        }
    },

    methods:{
        busqueda(){
                this.$store.dispatch('busqueda', this.txtbusqueda);            
        }
    }
}
</script>




<style>


</style>