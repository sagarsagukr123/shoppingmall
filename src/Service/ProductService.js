import axios from "axios";

const PRO_BASE_API='http://localhost:8081/products';

class ProductService
{
    getAllProducts(){
        return axios.get(PRO_BASE_API);
    }

    getProductById(productId){
        return axios.get(PRO_BASE_API+'/'+productId);
    }

    createProducts(product){
        return axios.post(PRO_BASE_API,product);
    }

    updateProducts(productID,product){
        return axios.put(PRO_BASE_API+'/'+productID,product);
    }

    deleteProducts(productID){
        return axios.delete(PRO_BASE_API+'/'+productID);
    }
}

export default new ProductService();