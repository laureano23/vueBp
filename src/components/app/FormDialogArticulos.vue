<template>
    <v-dialog v-model="getStateDialog" max-width="500px">
        <v-btn slot="activator" @click="showForm()" color="primary" dark class="mb-2">New Item</v-btn>
        <v-card>
          <v-card-title>
            <!-- <span class="headline">{{ formTitle }}</span> -->
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.codigo" label="Codigo"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.descripcion" label="Descripción"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
export default {
    data(){
        return {
            dialog: true    
        }        
    },
    props: [
      'editedItem',
      'editedIndex'
    ],
    computed:{
        getStateDialog:{
            get() {
                return this.$store.state.articulos.showDialogForm
            },
            set(){
                
            }
        }
    },
    methods: {
        showForm(){
            this.$store.dispatch('articulos/changeDialogState')
        },
        close () {
            // this.dialog = false
            // setTimeout(() => {
            // this.editedItem = Object.assign({}, this.defaultItem)
            // this.editedIndex = -1
            // }, 300)
            this.$store.dispatch('articulos/changeDialogState')
        },

        save () {
            console.log(this.editedIndex)
            if (this.editedIndex > -1) {
                this.$store.dispatch('articulos/saveEditedArt', {item: this.editedItem, index: this.editedIndex})
                //Object.assign(this.articulos[this.editedIndex], this.editedItem)
            } else {
                this.$store.dispatch('articulos/saveAddedArt', this.editedItem)
            }
            this.close()
        }
    }
}
</script>

