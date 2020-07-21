import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({


//****************************************************** */
  state: {
    busqueda:'',
    comics:[],
    autor: 'Jose Rubén Cerrada',
    fechacreacion:'Jul-2020',
    comentarios:[],
    misfavoritos:[]



  },
//****************************************************** */
  getters:{    
    enviarDataBusqueda(state){
      return state.busqueda; 
    },
    enviarDataComics(state){
      return state.comics;
    },
    enviarDataComentariosPersonajes(state){
      return state.comentarios;
    },
    enviarDataMisFavoritos(state){
      return state.misfavoritos;
    }

  },
//****************************************************** */
  mutations: {
    busqueda(state,txtbusqueda){
      state.busqueda=txtbusqueda;
    },
    llamarApiRickMorty(state, informacionApi){
      state.comics= informacionApi;
    },
    guardarComentariosPersonajes(state, MisComentarios){
      state.comentarios.unshift(MisComentarios);
      //console.log(state.comentarios);
    },
    agregarMisFavoritos(state, informacionMisFavoritos){    // 
      state.misfavoritos.unshift(informacionMisFavoritos);  // 
    },
    quitarFavorito(state, id){
      state.misfavoritos.splice(id,1)//Vuex   
    },
    quitarComentario(state,id){
      state.comentarios.splice(id,1);
    },
    reiniciarcomentarios(state){      
      state.comentarios=[]; 
    },
    editarComentario(state, dataEdicionComentario){
      
      //console.log('id desde la edicion ==>'+dataEdicionComentario.commentario);
      //console.log(dataEdicionComentario);
      
      let idbuscado = state.comentarios.find(dato=>parseInt(dato.id) === parseInt(dataEdicionComentario.id)); 
      idbuscado.comment = dataEdicionComentario.commentario
      //console.log(state.comentarios);

    },
    

  },
//****************************************************** */
  actions: {
    busqueda(context, txtbusqueda){
      context.commit('busqueda', txtbusqueda)
    },
    llamarApiRickMorty(context, parametrosllamadoApi){
      context.commit('llamarApiRickMorty', parametrosllamadoApi)
    },
    guardarComentariosPersonajes(context, auxiliarComentario){
      context.commit('guardarComentariosPersonajes', auxiliarComentario)
    },
    agregarMisFavoritos(context, parametrosguardarMisFavoritos){   // Agregar a favoritos
      context.commit('agregarMisFavoritos', parametrosguardarMisFavoritos)
    },
    quitarFavorito(context, id){
      context.commit('quitarFavorito', id)
    },
    quitarComentario(context, id){
      context.commit('quitarComentario', id)
    },
    reiniciarcomentarios(context){      
      context.commit('reiniciarcomentarios')
    },
    editarComentario(context, edicionComentario){      
      context.commit('editarComentario', edicionComentario)       
    }
    

  },
//****************************************************** */
  


  modules: {
  }
})
