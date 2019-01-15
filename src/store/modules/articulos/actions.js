// https://vuex.vuejs.org/en/actions.html
import apiArticulos from '@/services/api/ArticulosService'

export default {
  changeDialogState(context){
    context.commit('setShowDialogForm')
  },

  getArticulos(context, data){
    apiArticulos.getArticulos().then(function(resp){
      context.commit('loadArticulos', resp.data)
    })
  },

  saveEditedArt(context, data){
    apiArticulos.saveEditedArticulo(data.item).then(resp => {
      if(resp.data.success){
        context.commit('setUpdatedArt', {index: data.index, item: data.item})
      }      
    })
  },

  saveAddedArt(context, data){
    apiArticulos.saveNewArticulo(data).then(resp => {
      if(resp.data.success){
        context.commit('addNewArt', data)
      }      
    }).catch(err=>{
      console.log(err)
    })
  },

  deleteItem(context, data){
    apiArticulos.deleteArticulo(data.item).then(resp=>{
      context.commit('spliceItem', {index: data.index})
    })
  }
}
