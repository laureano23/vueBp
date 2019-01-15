import { Store } from "vuex";

export default {
    loadArticulos(state, articulos){
      state.articulos = articulos
    },
    setShowDialogForm(state){
      state.showDialogForm = !state.showDialogForm
    },
    setUpdatedArt(state, data){
      Object.assign(state.articulos[data.index], data.item)
    },
    addNewArt(state, item){
      state.articulos.push(item)
      this.setShowDialogForm  
    },
    spliceItem(state, index){
        state.articulos.splice(index, 1)
    }
  }