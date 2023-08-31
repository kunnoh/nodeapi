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

const products = [
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
]

async function createProduct() {
    return products[0]
}

async function getProducts(page = 1, limit = 5) {
    // console.log(query)
    return { total: products.length, products }
}

async function getProduct(id) {
    return products.find((p) => p.id === id)
}

async function updateProduct() {
    return { total: products.length, products }
}

async function deleteProduct() {
    return { total: products.length, products }
}
module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
}
