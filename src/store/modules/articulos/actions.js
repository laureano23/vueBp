// https://vuex.vuejs.org/en/actions.html
import apiArticulos from '@/services/api/ArticulosService'

export default {
  getArticulos(context, data){
    apiArticulos.getArticulos().then(function(resp){
      context.commit('loadArticulos', resp.data)
    })
  },

  saveEditedArt(context, data){
    apiArticulos.saveEditedArticulo(data.item).then(resp => {
      context.commit('setUpdatedArt', {index: data.index, item: data.item})
    })
  },

  saveAddedArt(context, data){
    apiArticulos.saveNewArticulo(data).then(resp => {
      context.commit('addNewArt', data)
    })
  }
}
