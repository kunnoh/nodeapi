// class ProductService{
//     products = [
//         {
//             id: 'iubuvgcfy',
//             name: 'spinach',
//             price: 15
//         },
//         {
//             id: 'mnbvvbn',
//             name: 'tomato',
//             price: 5
//         },
//         {
//             id: 'zwesxdfl',
//             name: 'garlic',
//             price: 30
//         },
//         {
//             id: 'ytvoninm',
//             name: 'carrot',
//             price: 10
//         },
//         {
//             id: 'mnihubgy',
//             name: 'cabbage',
//             price: 20
//         },
//         {
//             id: 'zerxcdrfv',
//             name: 'onion',
//             price: 10
//         },
//         {
//             id: 'pmouiy',
//             name: 'watermelon',
//             price: 190
//         }
//     ];

//     constructor(){}

//     static async getProducts(){
//         return { total: products.length, products };
//     };

//     static getAllProducts(){
//         return { products: 9};
//     };
// }

// module.exports = ProductService;



class ProductManager {

    products = [
        {
            id: 'iubuvgcfy',
            name: 'spinach',
            price: 15,
        },
        {
            id: 'mnbvvbn',
            name: 'tomato',
            price: 5,
        },
        {
            id: 'zwesxdfl',
            name: 'garlic',
            price: 30,
        },
        {
            id: 'ytvoninm',
            name: 'carrot',
            price: 10,
        },
        {
            id: 'mnihubgy',
            name: 'cabbage',
            price: 20,
        },
        {
            id: 'zerxcdrfv',
            name: 'onion',
            price: 10,
        },
        {
            id: 'pmouiy',
            name: 'watermelon',
            price: 190,
        },
    ];


    getProduct() {
        return products.find((p) => p.id === id)
    }

    getProducts() {
        return { total: products.length, products }
    }

    createProduct() {
        return products[0]
    }

    updateProduct() {
        return { total: products.length, products }
    }

    deleteProduct() {
        return { total: products.length, products }
    }
}

export default ProductManager;

