<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>My CRUD</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <formDialog v-bind:editedItem="editedItem" v-bind:editedIndex="editedIndex"></formDialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="articulos"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.codigo }}</td>
        <td class="text-xs-left">{{ props.item.descripcion }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import formDialog from '@/components/app/FormDialogArticulos'

  export default {
    components:{
      'formDialog': formDialog
    },    
    data: () => ({
      headers: [
        { text: 'Codigo', value: 'codigo' },
        { text: 'Descripcion', value: 'descripcion' },
      ],
      editedIndex: -1,
      editedItem: {
        codigo: '',
        descripcion: 0,
      },
      defaultItem: {
        codigo: '',
        descripcion: 0,
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      articulos(){
        return this.$store.state.articulos.articulos
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.getArticulos()
      },

      getArticulos(){
        this.$store.dispatch('articulos/getArticulos')
      },

      editItem (item) {
        this.editedIndex = this.articulos.indexOf(item)
        this.editedItem = Object.assign({}, item)
        
        this.$store.dispatch('articulos/changeDialogState')
      },

      deleteItem (item) {
        const index = this.articulos.indexOf(item)
        //confirm('Are you sure you want to delete this item?') && this.articulos.splice(index, 1)
        this.$store.dispatch('articulos/deleteItem', {index: index, item: item})
      },

      
    }
  }
</script>