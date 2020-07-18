<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
            <b-navbar-brand href="#">Rick & Morty</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto Oswald" >
                    <b-navbar-nav>
                        <b-nav-item :to="{name:'Home'}" exact><b-icon icon="geo-alt" v-b-tooltip.hover title="Home"></b-icon>Home</b-nav-item>
                        <b-nav-item :to="{name:'MisFavoritos'}" ><b-icon icon="heart" v-b-tooltip.hover title="Favoritos"></b-icon>Favoritos</b-nav-item>
                        <b-nav-item :to="{name:'MisComentarios'}" ><b-icon icon="chat-dots-fill" v-b-tooltip.hover title="Comentarios"></b-icon>Comentarios</b-nav-item>
                        <b-nav-item :to="{name:'Administracion'}" ><b-icon icon="gear-wide" v-b-tooltip.hover title="Administracion"></b-icon>Administración</b-nav-item>

                    </b-navbar-nav> 

                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search" type="search" v-model="txtbusqueda"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit" @click.prevent="busqueda" >Search</b-button>
                    </b-nav-form>




                </b-navbar-nav>
            </b-collapse>
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