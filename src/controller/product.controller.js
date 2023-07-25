const {getAllProducts} = require('../services/poduct.service');

class ProductController {
    constructor(){}
    
    getProductsAll(){
        const p = getAllProducts();
        return  p;
    }
}

module.exports = ProductController;