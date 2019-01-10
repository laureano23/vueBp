import axios from 'axios'

export default{
    deleteArticulo(){
        const options = {
            method: 'GET',
            headers: { 'content-type': 'application/form-data' },
            url: 'http://localhost/backend/deleteArticulo.php',
        };
        return axios(options)
    },
    getArticulos(){
        const options = {
            method: 'GET',
            headers: { 'content-type': 'application/form-data' },
            url: 'http://localhost/backend/articulos.php',
        };
        return axios(options)
    },
    saveEditedArticulo(art){
        const options = {
            method: 'GET',
            headers: { 'content-type': 'application/form-data' },
            url: 'http://localhost/backend/articuloEdit.php',
            params: {
                articulo: art
            }
        };
        return axios(options)
    },
    saveNewArticulo(art){
        const options = {
            method: 'GET',
            headers: { 'content-type': 'application/form-data' },
            url: 'http://localhost/backend/articuloAdd.php',
            params: {
                articulo: art
            }
        };
        return axios(options)
    }
}