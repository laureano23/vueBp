import { Store } from "vuex";

export default {
    loadArticulos(state, articulos){
      state.articulos = articulos
    },
    setShowDialogForm(state, val){
      state.showDialogForm = val
    },
    setUpdatedArt(state, data){
      Object.assign(state.articulos[data.index], data.item)
    },
    addNewArt(state, item){
      state.articulos.push(item)
    },
    deleteArticulo(state, item){
        state.articulos.splice(state.articulos.indexOf(item), 1)
    }
  }