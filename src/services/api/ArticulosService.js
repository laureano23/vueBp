import axios from 'axios'
import config from '@/services/config'

const env=null;
if(process.env.NODE_ENV==='development'){
    env=config.entryDev
}else{
    env=config.entryProd
}

export default{
    deleteArticulo(art){
        const options = {
            method: 'GET',
            headers: { 
                'content-type': 'application/form-data',
                'X-AUTH-TOKEN': 'FAKE'
            },
            url: 'http://localhost/backend/deleteArticulo.php',
            params: {
                articulo: art
            }
        };
        return axios(options)
    },
    getArticulos(){
        console.log(process.env.NODE_ENV)
        console.log(env)
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/form-data',
                'X-Custom-Auth': 'laureano'
            },
            url: config.host+config.en+'articulos/extranet/articuloslist',
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